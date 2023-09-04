from flask import Flask, request
from flask_cors import CORS, cross_origin
import traceback
import requests
import os
import threading
from src.ml.utils import deleteTempFiles
from src.ml.utils import delete_file
from src.ml.utils import check_columns_and_datatypes

from src.ml.predict import predict_college_stats, predict_student_placement


deleteTempFiles()


def compare(compare_list, compare_str):
    for i in compare_list:
        if i in compare_str:
            return True
    return False


def create_app(test_config=None):

    app = Flask(__name__, static_url_path='', static_folder='static')
    CORS(app)

    @app.get('/')
    def Check():
        return {
            'status': 'Working....'
        }

    @app.post("/api/predict-campus-placements")
    @cross_origin(origins='*')
    def PredictCampusPlacements():
        try:

            campus_data_file = request.files.get('file', None)

            if campus_data_file is None:
                return {
                    'message': '[file] key not found in the form-data. Please upload excel file to fetch insights.'
                }, 400

            isError, errorMessage = check_columns_and_datatypes(
                campus_data_file)

            if isError == True:
                return {
                    'message': errorMessage
                }, 400

            stats, download_url = predict_college_stats(campus_data_file)

            temp_file_url_path = os.path.join(
                os.path.dirname(__file__), 'static', 'temp', download_url.split('/')[2])

            timer = threading.Timer(
                60*60, delete_file, args=[temp_file_url_path])
            timer.start()

            return {
                'status': 'file uploaded....',
                'stats': stats,
                'download_url': download_url
            }
        except TypeError as type_error:
            return {
                'message': str(type_error)
            }, 400
        except Exception as e:
            return {
                'message': 'Something went wrong.',
                'stack': traceback.format_exc()
            }, 500

    @app.post('/api/predict-student-placement')
    @cross_origin(origins='*')
    def PredictStudentPlacement():
        try:
            data = request.json
            # print(data)
            predictions = predict_student_placement(data)
            return predictions, 200
        except Exception as e:
            return {
                'message': 'Something went wrong.',
                'stack': traceback.format_exc()
            }, 500

    @app.post("/api/resume-parser")
    @cross_origin(origins='*')
    def ResumeParser():
        try:
            resume_file = request.files['file']
            if(resume_file is None):
                return {
                    'message': 'File not found. Make sure you uploaded the resume file'
                }, 400
            resume_file_binary = resume_file.read()

            url = "https://api.affinda.com/v3/documents"

            files = {"file": (resume_file.filename,
                              resume_file_binary, "application/pdf")}
            payload = {
                "wait": "true",
                "collection": "ToVgXFPJ"
            }
            headers = {
                "accept": "application/json",
                "authorization": "Bearer "+os.getenv('RESUME_PARSER_API')
            }

            response = requests.post(
                url, data=payload, files=files, headers=headers)

            details = {
                "tier": None,
                "cgpa": None,
                "inter_gpa": None,
                "ssc_gpa": None,
                "internships": 0,
                "no_of_projects": 0,
                "is_participate_hackathon": 0,
                "is_participated_extracurricular": 0,
                "no_of_programming_languages": 0,
                "dsa": 0,
                "mobile_dev": 0,
                "web_dev": 0,
                "Machine Learning": 0,
                "cloud": 0,
                "CSE": 0,
                "ECE": 0,
                "IT": 0,
                "MECH": 0
            }

            data = response.json()["data"]

            try:
                if data['education'] is not None:
                    for i in data["education"]:
                        if(i.get('accreditation') is not None and i["accreditation"].get("education") is not None and i.get('organization') is not None):

                            if ((i["accreditation"]["educationLevel"] is not None and 'bachelors' in i["accreditation"]["educationLevel"].lower()) or (i["accreditation"]["inputStr"] is not None and ('bachelors' in i["accreditation"]["inputStr"].lower() or 'btech' in i["accreditation"]["inputStr"].lower())) or (i["organization"] is not None and 'engineering' in i["organization"].lower())):

                                details["cgpa"] = i["grade"]["value"]

                                branch = i["accreditation"]["education"].lower()
                                if compare(['cse', 'computer', 'csbs', 'cst'], branch):
                                    details["CSE"] = 1
                                elif compare(['communication', 'ece'], branch):
                                    details['ECE'] = 1
                                elif compare(['mechanical', 'mech'], branch):
                                    details["MECH"] = 1

                            elif ((i["accreditation"]["inputStr"] is not None and 'inter' in i["accreditation"]["inputStr"].lower()) or (i['accreditation']['education'] is not None and 'mpc' in i['accreditation']['education'].lower())):
                                details["inter_gpa"] = i["grade"]["value"]
                            elif((i["organization"] is not None and 'school' in i["organization"].lower()) or (i["accreditation"]["inputStr"] is not None and 'ssc' in i["accreditation"]["inputStr"].lower())):
                                details["ssc_gpa"] = i["grade"]["value"]
            except:
                pass

            try:
                if 'hackathon' in data["rawText"]:
                    details['is_participate_hackathon'] = 1
                if compare(['member', 'contest', 'participated', 'volunteer', 'activit'], data['rawText']):
                    details['is_participated_extracurricular'] = 1
            except:
                pass

            try:
                for i in data["skills"]:
                    name = i["name"].lower()
                    if compare(["dsa", "data structures", "algorithms"], name):
                        details['dsa'] = 1
                    if compare(['html', 'css', 'javascript', 'mern'], name):
                        details['web_dev'] = 1
                    if compare(['machine learning', 'data science'], name):
                        details["Machine Learning"] = 1
                    if compare(['cloud', 'aws', 'azure'], name):
                        details['cloud'] = 1
                    if compare(['mobile', 'flutter', 'react native', 'swift', 'kotlin'], name):
                        details['mobile_dev'] = 1
                    if compare(['java', 'c++', 'python', 'golang', 'javascript', 'c#', 'php'], name):
                        details['no_of_programming_languages'] += 1
            except:
                pass

            try:
                if data['workExperience'] is not None:
                    details['internships'] = len(data["workExperience"])
            except:
                pass

            try:
                studentName = data['name']['raw']
            except:
                pass
            return {"details": details, "studentName": studentName}

        except Exception as e:
            return {
                'message': 'Something went wrong.',
                'stack': traceback.format_exc()
            }, 500

    @app.post("/api/recommendSkills")
    @cross_origin(origins='*')
    def RecommendSkills():
        body = request.get_json()
        print("hit", body['skills'])
        url = "https://api.affinda.com/v3/resume_search/suggestion_skill?"
        skill = ""
        for i in body['skills']:
            if i == 'mobile_dev':
                skill = "mobile"
            elif i == 'web_dev':
                skill = "web"
            elif i == 'dsa':
                skill = "data structures"
            else:
                skill = i

            url = url + 'skills='+skill+'&'
        print(url)

        headers = {
            "accept": "application/json",
            "authorization": "Bearer aff_804629cb290c541d48c4f3f75753be18d1f05ab0"
        }

        response = requests.get(url, headers=headers)

        return response.json()

    return app
