import requests
import os


def generate_access_token():
    API_KEY = os.getenv('ML_DEPLOYMENT_API_KEY')
    # NOTE: you must manually set API_KEY below using information retrieved from your IBM Cloud account.
    token_response = requests.post('https://iam.cloud.ibm.com/identity/token', data={"apikey":
                                                                                     API_KEY, "grant_type": 'urn:ibm:params:oauth:grant-type:apikey'})
    mltoken = token_response.json()["access_token"]
    return mltoken


"""
input_fields - array of fields
 [
          "tier",
          "cgpa",
          "inter_gpa",
          "ssc_gpa",
          "internships",
          "no_of_projects",
          "is_participate_hackathon",
          "is_participated_extracurricular",
          "no_of_programming_languages",
          "dsa",
          "mobile_dev",
          "web_dev",
          "Machine Learning",
          "cloud",
          "CSE",
          "ECE",
          "IT",
          "MECH"
  ]

  feature_values - array of arrays. Each array in the array contains features.
"""


def predict_salary_api(feature_values):

    mltoken = generate_access_token()

    header = {'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + mltoken}

    # NOTE: manually define and pass the array(s) of values to be scored in the next line
    payload_scoring = {
        "input_data": [
            {
                "fields": [
                    "tier",
                    "cgpa",
                    "internships",
                    "no_of_projects",
                    "is_participate_hackathon",
                    "is_participated_extracurricular",
                    "no_of_programming_languages",
                    "dsa",
                    "mobile_dev",
                    "web_dev",
                    "Machine Learning",
                    "cloud",
                    "CSE",
                    "ECE",
                    "IT",
                    "MECH"
                ],
                "values": feature_values
            }
        ]
    }

    response_scoring = requests.post('https://eu-gb.ml.cloud.ibm.com/ml/v4/deployments/98b08fa0-f51c-4818-9a79-66acf66c2f55/predictions?version=2021-05-01', json=payload_scoring,
                                     headers={'Authorization': 'Bearer ' + mltoken})
    data = response_scoring.json()['predictions'][0]['values']

    predictions = []

    for pred in data:
        predictions.append(pred[0])

    return predictions


def predict_isplaced_api(feature_values):

    mltoken = generate_access_token()

    header = {'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + mltoken}

    # NOTE: manually define and pass the array(s) of values to be scored in the next line
    payload_scoring = {"input_data": [{"fields": [
        "tier",
        "cgpa",
        "inter_gpa",
        "ssc_gpa",
        "internships",
        "no_of_projects",
        "is_participate_hackathon",
        "is_participated_extracurricular",
        "no_of_programming_languages",
        "dsa",
        "mobile_dev",
        "web_dev",
        "Machine Learning",
        "cloud",
        "CSE",
        "ECE",
        "IT",
        "MECH"
    ], "values":feature_values}]}

    response_scoring = requests.post('https://eu-gb.ml.cloud.ibm.com/ml/v4/deployments/f266280b-2055-4112-8ad6-3facb3934342/predictions?version=2021-05-01', json=payload_scoring,

                                     headers={'Authorization': 'Bearer ' + mltoken})

    data = response_scoring.json()['predictions'][0]['values']

    predictions = []
    probability = []

    for pred in data:
        predictions.append(pred[0])
        probability.append(str(pred[1][1]*100)[:5])
    return predictions, probability
