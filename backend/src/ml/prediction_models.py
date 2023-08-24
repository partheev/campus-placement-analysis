'''
  These functions perform prediction operations such as predicting whether a particular student is safely placed or not,
  and predicting the salary for those students.
'''

# Importing necessary libraries
# import numpy as np
# import pandas as pd
# import csv
# import pickle


# # Function to predict placement status based on features and branch
# def placed(tier, cgpa, inter, ssc, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, branch):
#     branch = str(branch)
#     # Predict using the appropriate model based on the branch
#     if branch.lower() == 'cse':
#         output = placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 1, 0, 0, 0]]))
#     elif branch.lower() == 'ece':
#         output = placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 0, 1, 0, 0]]))
#     elif branch.lower() == 'eee':
#         output = placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 0, 0, 1, 0]]))
#     elif branch.lower() == 'it':
#         output = placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 0, 0, 0, 1]]))
#     else:
#         output = placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 0, 0, 0, 0]]))
#     return output

# # Function to predict salary based on features, placement status, and branch
# def salarypredict(tier, cgpa, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, branch):
#     branch = str(branch)
#     # Predict using the appropriate model based on the branch
#     if branch.lower() == 'cse':
#         output = salary_model.predict(np.array([[tier, cgpa, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, 1, 0, 0, 0]]))
#     elif branch.lower() == 'ece':
#         output = salary_model.predict(np.array([[tier, cgpa, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, 0, 1, 0, 0]]))
#     elif branch.lower() == 'eee':
#         output = salary_model.predict(np.array([[tier, cgpa, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, 0, 0, 1, 0]]))
#     elif branch.lower() == 'it':
#         output = salary_model.predict(np.array([[tier, cgpa, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, 0, 0, 0, 1]]))
#     else:
#         output = salary_model.predict(np.array([[tier, cgpa, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, 0, 0, 0, 0]]))
#     return output


# # Loop through the rows of the dataset
# def get_data(tier1):
#     tier1=pd.read_csv(tier1)
#     for line in tier1:
#         print(line)
#     for i in range(len(tier1)):
#         row = tier1.iloc[i]
#         # Predict placement status using the placed function
#         a = placed(row[0], row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12], row[13], row[14], row[1])
#         # Predict salary using the salarypredict function
#         b = salarypredict(row[0], row[2], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12], row[13], row[14], a[0], row[1])
        
#         # Define columns for the CSV file
#         columns = ["tier", "Branch", "cgpa", "inter", "ssc", "internship", "no_project", "hackerthon", "extracurricular", "programming", "dsa", "mobile", "web_dev", "machine", "cloud", "Placed", "predict_salary"]
        
#         # Open the CSV file for writing
#         with open("output_file.csv", "a") as csvfile:
#             csvwriter = csv.writer(csvfile, delimiter=",")
#             # Write the header to the file
#             if i == 0:
#                 csvwriter.writerow(columns)
#             # Write the data row to the file
#             csvwriter.writerow([row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12], row[13], row[14], a[0], b[0]])
# # Loading the trained models using pickle

# salary_model = pickle.load(open('src/ml/models/sal_model.pkl', 'rb'))
# placed_model = pickle.load(open('src/ml/models/Placed_model.pkl', 'rb'))

# # C:\Users\NANDINI\campus-placement-analysis\backend\src\ml\models\Placed_model.pkl

import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_absolute_error,mean_absolute_percentage_error
import pickle
import csv

def placed(tier, cgpa, inter, ssc, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, branch):
    branch = str(branch)
    # Predict using the appropriate model based on the branch
    if branch.lower() == 'cse':
        output = placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 1, 0, 0, 0]]))
    elif branch.lower() == 'ece':
        output = placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 0, 1, 0, 0]]))
    elif branch.lower() == 'eee':
        output = placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 0, 0, 1, 0]]))
    elif branch.lower() == 'it':
        output = placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 0, 0, 0, 1]]))
    else:
        output = placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 0, 0, 0, 0]]))
    return output

# Function to predict salary based on features, placement status, and branch
def salarypredict(tier, cgpa, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, branch):
    branch = str(branch)
    # Predict using the appropriate model based on the branch
    if branch.lower() == 'cse':
        output = salary_model.predict(np.array([[tier, cgpa, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, 1, 0, 0, 0]]))
    elif branch.lower() == 'ece':
        output = salary_model.predict(np.array([[tier, cgpa, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, 0, 1, 0, 0]]))
    elif branch.lower() == 'eee':
        output = salary_model.predict(np.array([[tier, cgpa, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, 0, 0, 1, 0]]))
    elif branch.lower() == 'it':
        output = salary_model.predict(np.array([[tier, cgpa, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, 0, 0, 0, 1]]))
    else:
        output = salary_model.predict(np.array([[tier, cgpa, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, 0, 0, 0, 0]]))
    return output


# Loop through the rows of the dataset
def get_data(tier1):
    tier1=pd.read_csv(tier1)
    for i in range(len(tier1)):
        row = tier1.iloc[i]
        # Predict placement status using the placed function
        a = placed(row[2], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12], row[13], row[14], row[15], row[16], row[17], row[4])
        #Predict salary using the salarypredict function
        b = salarypredict(row[2], row[5], row[8], row[9], row[10], row[11], row[12], row[13], row[14], row[15], row[16], row[17], a[0], row[4])
        
        # Define columns for the CSV file
        columns = ["s_id","name","tier","gender", "branch", "cgpa", "inter_gpa", "ssc_gpa", "internships", "no_of_projects", "is_participated_hackathon", "is_participated_extracurricular", "no_of_programming_languages", "dsa", "mobile_dev", "web_dev", "Machine Learning", "cloud", "other_skills","is_placed", "salary_as_fresher"]
        
        # Open the CSV file for writing
        with open("Output_file.csv", "a") as csvfile:
            csvwriter = csv.writer(csvfile, delimiter=",")
            # Write the header to the file
            if i == 0:
                csvwriter.writerow(columns)
            # Write the data row to the file
            csvwriter.writerow([row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12],row[13],row[14],row[15],row[16],row[17],row[18],a[0],b[0]])


salary_model = pickle.load(open('src/ml/models/sal_model.pkl', 'rb'))
placed_model=pickle.load(open('src/ml/models/Placed_model.pkl','rb'))
