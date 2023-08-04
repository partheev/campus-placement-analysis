from flask import Flask


def create_app(test_config=None):
    app = Flask(__name__)

    @app.get("/")
    def home():
        return {
            'status': 'Working....'
        }

    return app
