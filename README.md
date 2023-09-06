# PlacemenTrack - Campus Placements Analyzer

The PlacemenTrack is a cutting-edge application that revolutionizes the way educational institutions, students, and recruiters approach campus placements. This app harnesses the power of data analysis, machine learning, and web technologies to provide a comprehensive solution for optimizing the placement process.

## Some of screenshots
#### Insights screen
We presented the insights we extracted from the datasets about campus placements.

![placement-insights-01](https://github.com/partheev/campus-placement-analysis/assets/30794881/b727a9f9-9988-45fa-8eb1-cbe61221ca9d) 
![placement-insights-02](https://github.com/partheev/campus-placement-analysis/assets/30794881/592418e8-b731-4df3-9b18-95b4f8d440ca)
![placement-insights-04](https://github.com/partheev/campus-placement-analysis/assets/30794881/94bb1309-b9ce-4b6e-bcfc-98e83cccd9ba)
![placement-insights-03](https://github.com/partheev/campus-placement-analysis/assets/30794881/41b05c50-1778-4670-8b42-39e5269ba596)
![placement-insights-06](https://github.com/partheev/campus-placement-analysis/assets/30794881/a0df8629-146c-4894-865a-c0ac3b6c28e1)

#### Campus Placements Analyzer Screen
Here it predicts the campus placement results using ML models.

![campus-01](https://github.com/partheev/campus-placement-analysis/assets/30794881/a60b7a37-c324-412b-be43-e97b0bd4772f)

![campus-02](https://github.com/partheev/campus-placement-analysis/assets/30794881/af5f645e-c2f9-4329-94ed-d19956e98b46)

![campus-03](https://github.com/partheev/campus-placement-analysis/assets/30794881/7f426aed-118e-48f4-a0f4-cf9304dd844a)

![campus-04](https://github.com/partheev/campus-placement-analysis/assets/30794881/4bcc79ba-52d1-49d6-b7b1-d21c59c2b4a0)

#### Student Placement Prediction
Students can use this feature to predict their probability of getting placed and their predicted salary by uploading their resume.

![student-placements-01](https://github.com/partheev/campus-placement-analysis/assets/30794881/7d5b44ac-3423-45e3-8243-b118c5356c6e)
![student-placements-02](https://github.com/partheev/campus-placement-analysis/assets/30794881/f8291523-9f97-4e79-a1c8-cabc0ccd0219)




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

You can visit the application at http://localhost:3000 in development mode.
