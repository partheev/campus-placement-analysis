

from src.ml.predict import predict_college_stats


def test_predict_college_stats():

    with open('tests/unit_tests/sample_format.csv', 'r') as excel_sheet:
        stats = predict_college_stats(excel_file=excel_sheet)
        print(stats.columns)
        assert stats
