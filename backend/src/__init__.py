from flask import Flask, request
from flask_cors import CORS, cross_origin
import requests
import os

from src.ml.predict import predict_college_stats


def create_app(test_config=None):
    app = Flask(__name__)
    CORS(app)

    @app.get('/')
    def Check():
        return {
            'status': 'Working....'
        }

    @app.post("/api/predict-campus-placements")
    @cross_origin(origins='*')
    def PredictCampusPlacements():
        print('hello')
        campus_data_file = request.files.get('file', None)
        print(campus_data_file.filename)
        # if campus_data_file is None:
        #     return {
        #         'message': '[file] key not found in the form-data. Please upload excel file to fetch insights.'
        #     }, 400
        stats = predict_college_stats(campus_data_file)
        # print(stats)
        return {
            'status': 'file uploaded....',
            # 'stats': stats
        }
    

    @app.post("/api/resume-parser")
    @cross_origin(origins='*')
    def ResumeParser():
        resume_file = request.files['file']
        if(resume_file is None):
            return {
                'message' : 'File not found. Make sure you uploaded the resume file'
            },400
        resume_file_binary = resume_file.read()
       
        url = "https://api.affinda.com/v3/documents"

        files = { "file": (resume_file.filename,resume_file_binary , "application/pdf") }
        payload = {
            "wait": "true",
            "collection": "ToVgXFPJ"
        }
        headers = {
            "accept": "application/json",
            "authorization": "Bearer "+os.environ['RESUME_PARSER_API']
        }

        response = requests.post(url, data=payload, files=files, headers=headers)
        return response.text

    return app
