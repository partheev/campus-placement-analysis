# PlacemenTrack - Campus Placements Analyzer

The PlacemenTrack is a cutting-edge application that revolutionizes the way educational institutions, students, and recruiters approach campus placements. This app harnesses the power of data analysis, machine learning, and web technologies to provide a comprehensive solution for optimizing the placement process.

#### Website Live URL: https://placementrack-frontend-nomig6337-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/placement-insights

## Docker images:

Backend: https://hub.docker.com/r/partheev8/campus-backend

Frontend: https://hub.docker.com/r/partheev8/campus-frontend

## Block Diagram
![block-diagram](https://github.com/poornesh-chenna/campus-placement-analysis/assets/30794881/50d6e95b-2b6a-4b82-bc51-5984de023b1b)

## Flow Chart
<img alt="flow chart" src="https://github.com/poornesh-chenna/campus-placement-analysis/assets/30794881/f6ac0eb2-cf5e-4c97-9df8-a8af31263ba8" width="50%" height="50%" />


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

keep VITE_BACKEND_URL=http://localhost:5000 while running application locally in development mode.

### Run backend

-   `cd backend`
-   `pip install -r requirements.txt`
-   `flask run`

> Note: Python must be installed in the system (v3.9+ preferred). Configure env variables in backend/.env file.

Add these enviroment variables - ML_DEPLOYMENT_API_KEY, RESUME_PARSER_API, RECOMMEND_SKILLS_API

You can visit the application at http://localhost:3000 in development mode.
