

from src.ml.predict import predict_college_stats
# from src.ml.prediction_models import get_data
import json
def test_predict_college_stats():

    with open('tests/unit_tests/sample_format.csv', 'r') as excel_sheet:
         stats=predict_college_stats(excel_file=excel_sheet)
         print(stats)
         Annotation_final_json = json.dumps(stats)
         print(Annotation_final_json)
         
    
       
test_predict_college_stats()