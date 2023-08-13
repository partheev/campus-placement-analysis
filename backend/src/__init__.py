from flask import Flask, request
from flask_cors import CORS, cross_origin


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
        campus_data_file = request.files['file']

        return {
            'status': 'file uploaded....',
        }

    return app
