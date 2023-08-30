import pandas as pd
def get_domain_skills(domain_name, skills_array):
    domain_skills = {
    "Machine Learning": {
        "Programming Languages": ["Python", "R"],
        "Algorithms": ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"],
        "Frameworks": ["TensorFlow", "PyTorch", "scikit-learn"],
        "Feature Engineering": ["Feature Selection", "Feature Extraction"],
        "Model Evaluation": ["Accuracy", "Precision", "Recall", "F1-score"],
        "Deployment": ["Cloud Platforms", "Docker", "Kubernetes"],
        "Version Control": "Git",
        "Software Engineering": ["Code Review", "Debugging"],
        "Math and Statistics": ["Linear Algebra", "Calculus", "Probability"],
        "Ethical Considerations": ["Bias Mitigation", "Fairness"],
    },
    "Data Science": {
        "Data Manipulation": ["Pandas", "NumPy"],
        "Data Visualization": ["Matplotlib", "Seaborn", "Plotly"],
        "Statistical Analysis": ["Hypothesis Testing", "Regression Analysis"],
        "Data Cleaning": ["Data Preprocessing", "Handling Missing Data"],
        "Big Data": ["Hadoop", "Spark"],
        "SQL": True,
    },
    "Web Development": {
        "Frontend": ["HTML", "CSS", "JavaScript", "React", "Vue.js"],
        "Backend": ["Python", "Node.js", "Django", "Flask"],
        "Databases": ["SQL", "NoSQL"],
        "Version Control": "Git",
        "API Development": ["RESTful APIs", "GraphQL"],
        "Security": ["Authentication", "Authorization"],
        "Software Engineering": ["Code Review", "Design Patterns"],
    },
    "Cloud Computing": {
        "Cloud Platforms": ["Amazon AWS", "Microsoft Azure", "Google Cloud"],
        "Containers": ["Docker", "Kubernetes"],
        "Networking": True,
        "Serverless Computing": True,
        "Security": ["Identity and Access Management"],
    },
    "Android Development": {
        "Programming Languages": ["Java", "Kotlin"],
        "UI/UX Design": True,
        "API Integration": True,
        "Version Control": "Git",
        "Security": ["App Permissions", "Secure Communication"],
        "Software Engineering": ["Code Review", "Design Patterns"],
    },
    "Natural Language Processing (NLP)": {
        "Text Processing": True,
        "NLP Libraries": ["NLTK", "spaCy", "Transformers"],
        "Sentiment Analysis": True,
        "Language Modeling": True,
        "Named Entity Recognition (NER)": True,
        "Topic Modeling": True,
    },
    "Computer Vision": {
        "Image Processing": True,
        "Image Classification": True,
        "Object Detection": True,
        "Facial Recognition": True,
        "Deep Learning for CV": ["Convolutional Neural Networks (CNNs)"],
    },
    "Reinforcement Learning": {
        "Markov Decision Processes": True,
        "Policy Gradient Methods": True,
        "Q-Learning": True,
        "Deep Reinforcement Learning": True,
        "OpenAI Gym": True,
    },
    "Cybersecurity": {
        "Network Security": True,
        "Malware Detection": True,
        "Intrusion Detection": True,
        "Security Auditing": True,
        "Ethical Hacking": True,
    },
    "Software Engineering": {
        "programming_languages":['java','python','.net'],
        "Version Control": ["Git", "SVN"],
        "Code Review": True,
        "Agile Methodologies": ["Scrum", "Kanban"],
        "Debugging": True,
        "Testing": ["Unit Testing", "Integration Testing", "Test Automation"],
        "Clean Code": True,
        "Design Patterns": True,
        "Continuous Integration and Continuous Deployment (CI/CD)": True,
    }
    }
    
    
    # Check if the provided domain_name exists in the domain_skills dictionary
    if domain_name in domain_skills:
        return domain_skills[domain_name]
    else:
        return None  # Domain not found

# Example usage
selected_domain = "Machine Learning"
selected_skills_array = ["Programming Languages", "Algorithms", "Frameworks"]
result = get_domain_skills(selected_domain, selected_skills_array)
for skill,value in result.items():
    print(skill,value)
    
