

from src.ml.predict import predict_college_stats
from src.ml.prediction_models import get_data
import pandas as pd
def test_predict_college_stats():

    with open('tests/unit_tests/sample_format.csv', 'r') as excel_sheet:
        get_data(tier1=excel_sheet)
    with open('Output_file.csv','r') as input_sheet:
        stats=predict_college_stats(excel_file_camp=input_sheet)
        print(stats)
test_predict_college_stats()