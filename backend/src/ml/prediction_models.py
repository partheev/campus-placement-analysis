import pandas as pd
import numpy as np
import os
from src.ml.utils import convert_is_placed_to_zero_ifnot_placed, load_pickle_models, transform_placed_prediction, transform_salary_prediction, save_df_to_temp
from src.ml.ml_deploy import predict_isplaced_api, predict_salary_api


def get_domain_skills(domain_name):
    domain_skills = {
        "Machine Learning": {
            "Programming Languages of ml": ["Python", "R"],
            "ML_Algorithms": ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"],
            "ML_Frameworks": ["TensorFlow", "PyTorch", "scikit-learn"],
            "Feature Engineering_technique": ["Feature Selection", "Feature Extraction"],
            "Model_Evaluation_metrics": ["Accuracy", "Precision", "Recall", "F1-score"],
            "Deployment_platforms": ["Cloud Platforms", "Docker", "Kubernetes"],
            "Version Control": "Git",
            "Software Engineering_tools": ["Code Review", "Debugging"],
            "Math and Statistics": ["Linear Algebra", "Calculus", "Probability"],
            "Ethical Considerations": ["Bias Mitigation", "Fairness"],
        },
        "Data Science": {
            "Data Manipulation": ["Pandas", "NumPy"],
            "Data Visualization": ["Matplotlib", "Seaborn", "Plotly"],
            "Statistical Analysis": ["Hypothesis Testing", "Regression Analysis"],
            "Data Cleaning": ["Data Preprocessing", "Handling Missing Data"],
            "Big Data": ["Hadoop", "Spark", "SQL"],
        },
        "Web Development": {
            "Frontend_languages": ["HTML", "CSS", "JavaScript", "React", "Vue.js"],
            "Backend_Languages": ["Python", "Node.js", "Django", "Flask"],
            "Databases": ["SQL", "NoSQL"],
            "Version Control": "Git",
            "API Integrations": ["RESTful APIs", "GraphQL"],
            "Security_methods": ["Authentication", "Authorization"],
            "Software Engineering_concepts": ["Code Review", "Design Patterns"],
        },
        "Cloud Computing": {
            "Cloud Platforms[Amazon AWS, Microsoft Azure, Google Cloud]": ["Amazon AWS", "Microsoft Azure", "Google Cloud", "Networking", "severless_computing"],
            "Container[Docker, Kubernetes]": ["Docker", "Kubernetes"],
            "Security": ["Identity and Access Management"]
        },
        "Android Development": {
            "Programming Languages": ["Java", "Kotlin"],
            "Version Control": "Git",
            "Security": ["App Permissions", "Secure Communication", "API Integration"],
            "Software Engineering": ["Code Review", "Design Patterns", "UI/UX design"],
        },
        "Natural Language Processing (NLP)": {
            "Text Processing": True,
            "NLP Libraries": ["NLTK", "spaCy", "Transformers"],
            "Sentiment Analysis": True,
            "Language Modeling": True,
            "Named Entity Recognition (NER)": True,
            "Topic Modeling": True,
        },
        "Software Engineering": {
            "programming_languages": ['java', 'python', '.net'],
            "Version Control": ["Git", "SVN"],
            "Code Review": True,
            "Agile Methodologies": ["Scrum", "Kanban"],
            "Debugging": True,
            "Testing": ["Unit Testing", "Integration Testing", "Test Automation"],
            "Clean Code": True,
            "Design Patterns": True,
            "Continuous Integration and Continuous Deployment (CI/CD)": True,
        },
        "dsa": {
            "Basics": ["Arrays", "Linked Lists", "Stacks", "Queues"],
            "Searching": ["Linear Search", "Binary Search"],
            "Sorting": ["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort"],
            "Hashing": ["Hash Tables", "Hash Maps"],
            "Trees": ["Binary Trees", "Binary Search Trees", "AVL Trees", "Heap"],
            "Graphs": ["Graph Representation", "Depth-First Search (DFS)", "Breadth-First Search (BFS)"],
            "Divide and Conquer": ["Merge Sort", "Quick Sort"],
            "Recursion": ["Recursive Functions", "Recursion Trees"],
            "Complexity Analysis": ["Time Complexity", "Space Complexity", "Big O Notation"],
            "Algorithmic Paradigms": ["Brute Force", "Divide and Conquer", "Dynamic Programming", "Greedy Algorithms"],
            "Problem Solving": ["Problem Decomposition", "Algorithm Design"],
            "Data Structures": ["Arrays", "Linked Lists", "Stacks", "Queues", "Hash Tables", "Trees", "Graphs", "Heaps"]
        }
    }

    # Check if the provided domain_name exists in the domain_skills dictionary
    if domain_name in domain_skills:
        return domain_skills[domain_name]
    else:
        return None  # Domain not found


is_placed_model, salary_model = load_pickle_models()


def predict_isplaced_pickle(tier, cgpa, inter, ssc, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, branch):
    branch = str(branch)
    # Predict using the appropriate model based on the branch
    if branch.lower() == 'cse':
        output = is_placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project,
                                                    hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 1, 0, 0, 0]]))
    elif branch.lower() == 'ece':
        output = is_placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project,
                                                    hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 0, 1, 0, 0]]))
    elif branch.lower() == 'eee':
        output = is_placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project,
                                                    hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 0, 0, 1, 0]]))
    elif branch.lower() == 'it':
        output = is_placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project,
                                                    hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 0, 0, 0, 1]]))
    else:
        output = is_placed_model.predict(np.array([[tier, cgpa, inter, ssc, internship, no_project,
                                                    hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, 0, 0, 0, 0]]))
    return output

# Function to predict salary based on features, placement status, and branch


def predict_salary_pickle(tier, cgpa, internship, no_project, hackerthon, extracurricular, programming, dsa, mobile, web_dev, machine, cloud, isplace, branch):
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


result_list = []


def get_data2(tier1):
    tier1 = pd.read_csv(tier1)
    for i in range(len(tier1)):
        row = tier1.iloc[i]
        result = get_row_data(row)
        result_list.append(result)
    result_df = pd.DataFrame(result_list)
    result_df.to_csv('Output.csv', index=True)


# Function to predict and return 'placed' and 'salary' values for a row


def get_row_data(row):
    a = is_placed_model(row[2], row[5], row[6], row[7], row[8], row[9], row[10],
                        row[11], row[12], row[13], row[14], row[15], row[16], row[17], row[4])
    b = salary_model(row[2], row[5], row[8], row[9], row[10], row[11],
                     row[12], row[13], row[14], row[15], row[16], row[17], a[0], row[4])

    # Create a list to store the relevant domain skills
    relevant_skills = []
    if row['cloud'] == 1:
        relevant_skills.extend(get_domain_skills("Cloud Computing"))
    if row['Machine Learning'] == 1:
        relevant_skills.extend(get_domain_skills("Machine Learning"))
    if row['web_dev'] == 1:
        relevant_skills.extend(get_domain_skills("Web Development"))
    if row['dsa'] == 0:
        relevant_skills.extend(get_domain_skills("dsa"))
    return {'placed': a[0], 'salary': b[0], 'Recommeded_skills': relevant_skills}

# Loop through the rows of the dataset


def load_data(excel_file):
    # importing the csv file
    file_name = excel_file.filename
    file_extension = os.path.splitext(file_name)[1]
    if file_extension == '.csv':
        df = pd.read_csv(excel_file)
    elif file_extension == '.xlsx' or file_extension == '.xls':
        df = pd.read_excel(excel_file)
    else:
        raise Exception('The file is not in specified format.')
    return df


def get_predicted_data(dataset):

    placed_prediction_feature_data = transform_placed_prediction(dataset)
    salary_prediction_feature_data = transform_salary_prediction(dataset)

    isplaced_predictions, isplaced_probability = predict_isplaced_api(
        placed_prediction_feature_data)

    salary_predictions = predict_salary_api(salary_prediction_feature_data)

    salary_predictions = convert_is_placed_to_zero_ifnot_placed(
        isplaced_predictions, salary_predictions)

    dataset['is_placed'] = isplaced_predictions
    dataset['salary_as_fresher'] = salary_predictions
    dataset['placement_probability'] = isplaced_probability

    return dataset
