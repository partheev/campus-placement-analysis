
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_absolute_error, mean_absolute_percentage_error
import pickle
import os


def placed(tier, cgpa, inter, ssc, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, branch):
    branch = str(branch)
    # Predict using the appropriate model based on the branch
    if branch.lower() == 'cse':
        output = placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project,
                                      hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 1, 0, 0, 0]]))
    elif branch.lower() == 'ece':
        output = placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project,
                                      hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 0, 1, 0, 0]]))
    elif branch.lower() == 'eee':
        output = placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project,
                                      hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 0, 0, 1, 0]]))
    elif branch.lower() == 'it':
        output = placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project,
                                      hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 0, 0, 0, 1]]))
    else:
        output = placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project,
                                      hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 0, 0, 0, 0]]))
    return output

# Function to predict salary based on features, placement status, and branch


def salarypredict(tier, cgpa, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, branch):
    branch = str(branch)
    # Predict using the appropriate model based on the branch
    if branch.lower() == 'cse':
        output = salary_model.predict(np.array([[tier, cgpa, internship, no_project, hackerthon,
                                      extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, 1, 0, 0, 0]]))
    elif branch.lower() == 'ece':
        output = salary_model.predict(np.array([[tier, cgpa, internship, no_project, hackerthon,
                                      extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, 0, 1, 0, 0]]))
    elif branch.lower() == 'eee':
        output = salary_model.predict(np.array([[tier, cgpa, internship, no_project, hackerthon,
                                      extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, 0, 0, 1, 0]]))
    elif branch.lower() == 'it':
        output = salary_model.predict(np.array([[tier, cgpa, internship, no_project, hackerthon,
                                      extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, 0, 0, 0, 1]]))
    else:
        output = salary_model.predict(np.array([[tier, cgpa, internship, no_project, hackerthon,
                                      extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, 0, 0, 0, 0]]))
    return output


#<---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->#

salary_model_path = os.path.join(
    os.path.dirname(__file__), 'models', 'sal_model.pkl')
placed_model_path = os.path.join(os.path.dirname(
    __file__), 'models', 'Placed_model.pkl')
salary_model = pickle.load(open(salary_model_path, 'rb'))
placed_model = pickle.load(open(placed_model_path, 'rb'))

# Function to predict and return 'placed' and 'salary' values for a row


def get_row_data(row):
    a = placed(row[2], row[5], row[6], row[7], row[8], row[9], row[10],
               row[11], row[12], row[13], row[14], row[15], row[16], row[17], row[4])
    b = salarypredict(row[2], row[5], row[8], row[9], row[10], row[11],
                      row[12], row[13], row[14], row[15], row[16], row[17], a[0], row[4])
    return {'is_placed': a[0], 'salary_as_fresher': b[0]}

# Loop through the rows of the dataset


def get_data(tier1):
    tier1 = pd.read_csv(tier1)
    result_list = []
    for i in range(len(tier1)):
        row = tier1.iloc[i]
        result = get_row_data(row)
        result_list.append(result)
    result_df = pd.DataFrame(result_list)
    result_df = pd.concat([tier1, result_df], axis=1)
    print(result_df)
    return result_df

# salary_model = pickle.load(open('src/ml/models/sal_model.pkl', 'rb'))
# placed_model=pickle.load(open('src/ml/models/Placed_model.pkl','rb'))
