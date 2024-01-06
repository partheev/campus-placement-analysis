# PlacemenTrack - Campus Placements Analyzer

The PlacemenTrack is a cutting-edge application that revolutionizes the way educational institutions, students, and recruiters approach campus placements. This app harnesses the power of data analysis, machine learning, and web technologies to provide a comprehensive solution for optimizing the placement process.

## Demo

https://github.com/partheev/campus-placement-analysis/assets/30794881/d9701d05-08a4-4e65-9c6e-049fc2f062d6


## Tech-stack used
- Reactjs
- Material-UI
- ApexCharts (React)
- Flask
- Redhat Openshift
- Docker
- Numpy, Pandas, Matplotlib, Seaborn and Scikit-learn

## Some of screenshots
#### Insights screen
We presented the insights we extracted from the datasets about campus placements.

![placement-insights-01](https://github.com/partheev/campus-placement-analysis/assets/30794881/e5020d1c-4f28-4ceb-96ef-1704b87247ee)
![placement-insights-02](https://github.com/partheev/campus-placement-analysis/assets/30794881/258a8e0a-470d-48f2-8119-341702dbdc98)
![placement-insights-03](https://github.com/partheev/campus-placement-analysis/assets/30794881/6697b0e6-2468-4d04-86df-db2e4ff6c468)
![placement-insights-04](https://github.com/partheev/campus-placement-analysis/assets/30794881/e46564c8-4936-49a3-aa5c-364999f8c9c0)
![placement-insights-05](https://github.com/partheev/campus-placement-analysis/assets/30794881/863e3f10-2f25-49b7-95b2-c3372945e99a)
![placement-insights-06](https://github.com/partheev/campus-placement-analysis/assets/30794881/bf9b62f5-baa3-436b-957d-d01fffe5180b)




#### Campus Placements Analyzer Screen
Here it predicts the campus placement results using ML models.

![campus-01](https://github.com/partheev/campus-placement-analysis/assets/30794881/1226daad-d804-4a50-8ace-caadbb9413df)
![campus-02](https://github.com/partheev/campus-placement-analysis/assets/30794881/91a36172-47ed-46cc-a932-bc2049d95434)
![campus-03](https://github.com/partheev/campus-placement-analysis/assets/30794881/dbad9085-ae2e-4616-8cc3-e211b6af353e)
![campus-04](https://github.com/partheev/campus-placement-analysis/assets/30794881/3b00d36b-2f52-402e-9789-a83dda91e53d)

#### Student Placement Prediction
Students can use this feature to predict their probability of getting placed and their predicted salary by uploading their resume.

![student-placements-01](https://github.com/partheev/campus-placement-analysis/assets/30794881/0e32f6f7-314d-4923-a6f5-ffebdcac4cfc)

![student-placements-02](https://github.com/partheev/campus-placement-analysis/assets/30794881/04e85cd7-c8d2-4c77-a22e-5a725b407d20)




## Docker images:

Backend: https://hub.docker.com/r/partheev8/campus-backend

Frontend: https://hub.docker.com/r/partheev8/campus-frontend

## Block Diagram
![block-diagram](https://github.com/smartinternz02/SBSPS-Challenge-9964-Identifying-Patterns-and-Trends-in-Campus-Placement-Data-using-Machine-Learning/assets/30794881/b9702a6a-d0fd-49b3-88d1-fe48db35e068)

## Flow Chart
<img alt="flow chart" src="https://github.com/smartinternz02/SBSPS-Challenge-9964-Identifying-Patterns-and-Trends-in-Campus-Placement-Data-using-Machine-Learning/assets/30794881/da5f704b-bc3d-45d8-b9c7-f7a0fd12d7e5" width="50%" height="50%" />


### Folder Structure

```
campus-placement-analysis/
├─ frontend - React application
├─ backend - Flask application
├─ EDA_Notebooks - Contains All EDA work of this project and their datasets
│  ├─ datasets/
│  │  ├─ Predicted_data.xlsx
│  │  ├─ gdp.xlsx
│  ├─ Campus_Placements_Insights
│  ├─ Salary_Prediction.ipynb
│  ├─ Placement_prediction.ipynb
│  ├─ GDP_VS_Placements_EDA.ipynb
├─ project reports - Project Documents
│  ├─ block-diagram.png
│  ├─ flow-chart.png
│  ├─ project-report.pdf
├─ screenshots - Contains sheetshots of insights, predictions, and analytics.
├─ .gitignore

```

## How to run the project in your system

Clone the repo

### Run frontend

-   `cd frontend`
-   `npm install`
-   `npm run dev`

> Note: Node runtime must be installed to run the above commands. Create .env.local file and add VITE_BACKEND_URL variable name with endpoint as value.

keep VITE_BACKEND_URL=http://localhost:5000 while running the application locally in development mode.

### Run backend

-   `cd backend`
-   `pip install -r requirements.txt`
-   `flask run`

> Note: Python must be installed in the system (v3.9+ preferred). Configure env variables in backend/.env file.

Add these enviroment variables - ML_DEPLOYMENT_API_KEY, RESUME_PARSER_API, RECOMMEND_SKILLS_API


### configure .env file 
```
You will need two API keys from Affinda for the resume parser and recommend skills features

1. Login to the official Affinda website

2. Create a workspace by selecting resumes under the recruitment category
  
3. Select "Generate an API Key" to generate a unique key for the resume workspace. Then, add the key to the env variable RESUME_PARSER_API.

Using the same procedures, establish a Resume Redacts workspace and update the RECOMMEND_SKILLS_API env variable with the key.
```

You can visit the application at http://localhost:3000 in development mode.
