import os
import pickle

# Prepared data in the format required by deployed model


def transform_placed_prediction(df):
    transformed_data = []
    placed = ['tier', 'cgpa', 'inter_gpa', 'ssc_gpa', 'internships', 'no_of_projects', 'is_participate_hackathon', 'is_participated_extracurricular',
              'no_of_programming_languages', 'dsa', 'mobile_dev', 'web_dev', 'Machine Learning', 'cloud', 'CSE', 'ECE', 'IT', 'MECH']
    for index, row in df.iterrows():
        row_values = []
        for column in placed:
            if(column != 'CSE' and column != 'IT' and column != 'MECH' and column != 'ECE'):
                row_values.append(row[column])

        # Check the branch value and fill the corresponding columns
        if row[4] == "CSE":
            row_values.insert(14, 1)
            row_values.insert(15, 0)
            row_values.insert(16, 0)
            row_values.insert(17, 0)
        elif row[4] == 'ECE':
            row_values.insert(14, 0)
            row_values.insert(15, 1)
            row_values.insert(16, 0)
            row_values.insert(17, 0)
        elif row[4] == 'IT':
            row_values.insert(14, 0)
            row_values.insert(15, 0)
            row_values.insert(16, 1)
            row_values.insert(17, 0)
        elif row[4] == 'MECH':
            row_values.insert(14, 0)
            row_values.insert(15, 0)
            row_values.insert(16, 0)
            row_values.insert(17, 1)
        else:
            row_values.insert(14, 0)
            row_values.insert(15, 0)
            row_values.insert(16, 0)
            row_values.insert(17, 0)
        transformed_data.append(row_values)
    return transformed_data


# Prepared data in the format required by deployed model
def transform_salary_prediction(df):
    transformed_data = []
    salary = ['tier', 'cgpa', 'internships', 'no_of_projects', 'is_participate_hackathon', 'is_participated_extracurricular',
              'no_of_programming_languages', 'dsa', 'mobile_dev', 'web_dev', 'Machine Learning', 'cloud', 'CSE', 'ECE', 'IT', 'MECH']
    for index, row in df.iterrows():
        row_values = []
        for column in salary:
            if(column != 'CSE' and column != 'IT' and column != 'MECH' and column != 'ECE'):
                row_values.append(row[column])

        # Check the branch value and fill the corresponding columns
        if row[4] == "CSE":
            row_values.insert(14, 1)
            row_values.insert(15, 0)
            row_values.insert(16, 0)
            row_values.insert(17, 0)
        elif row[4] == 'ECE':
            row_values.insert(14, 0)
            row_values.insert(15, 1)
            row_values.insert(16, 0)
            row_values.insert(17, 0)
        elif row[4] == 'IT':
            row_values.insert(14, 0)
            row_values.insert(15, 0)
            row_values.insert(16, 1)
            row_values.insert(17, 0)
        elif row[4] == 'MECH':
            row_values.insert(14, 0)
            row_values.insert(15, 0)
            row_values.insert(16, 0)
            row_values.insert(17, 1)
        else:
            row_values.insert(14, 0)
            row_values.insert(15, 0)
            row_values.insert(16, 0)
            row_values.insert(17, 0)
        transformed_data.append(row_values)
    return transformed_data


def load_pickle_models():
    salary_model_path = os.path.join(
        os.path.dirname(__file__), 'models', 'sal_model.pkl')
    placed_model_path = os.path.join(os.path.dirname(
        __file__), 'models', 'Placed_model.pkl')

    salary_model = pickle.load(open(salary_model_path, 'rb'))
    is_placed_model = pickle.load(open(placed_model_path, 'rb'))

    return is_placed_model, salary_model


def convert_is_placed_to_zero_ifnot_placed(is_placed, salary):

    for i in range(len(is_placed)):
        if is_placed[i] == 0:
            salary[i] = 0

    return salary
