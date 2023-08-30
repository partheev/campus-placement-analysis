import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_absolute_error, mean_absolute_percentage_error
import pickle
import csv
# Load the CSV file
import os


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
        return None

      # Domain not found
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# Iterate through each row in the DataFrame


# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# loading the pickle files

# salary_model = pickle.load(open('sal_model.pkl', 'rb'))
# placed_model = pickle.load(open('Placed_model.pkl', 'rb'))


# columns_for_salary = ['tier', 'cgpa', 'internships', 'no_of_projects', 'is_participate_hackathon', 'is_participated_extracurricular',
#                       'no_of_programming_languages', 'dsa', 'mobile_dev', 'web_dev', 'Machine Learning', 'cloud', 'CSE', 'ECE', 'IT', 'MECH']
# Initialize an empty list to store transformed data


# Apply the prediction functions on all rows at once
# columns_for_prediction1 = get_array1()
# columns_for_prediction2 = get_array2()


# print(columns_for_prediction1)
# print(columns_for_prediction2)

# print(salary_model.predict(columns_for_prediction1))
''''
salary_predictions = salary_model.predict([[columns_for_prediction2]])



# Create a DataFrame to store results
result_df = pd.DataFrame({
    'placed': placed_predictions,
    'salary': salary_predictions
})

# Get the relevant domain skills for each row
relevant_skills_list = []
for i in range(len(tier1)):
    row = tier1.iloc[i]
    relevant_skills = []
    if row['cloud'] == 1:
        relevant_skills.extend(get_domain_skills("Cloud Computing"))
    if row['Machine Learning'] == 1:
        relevant_skills.extend(get_domain_skills("Machine Learning"))
    if row['web_dev'] == 1:
        relevant_skills.extend(get_domain_skills("Web Development"))
    if row['dsa'] == 1:
        relevant_skills.extend(get_domain_skills("dsa"))
    relevant_skills_list.append(relevant_skills)

result_df['other_skills'] = relevant_skills_list


# Display the final result DataFrame
print(result_df)
'''
