

from src.ml.utils import transform_placed_prediction
from src.ml.utils import save_df_to_temp
from .prediction_models import get_predicted_data, load_data
import numpy as np
import pandas as pd


'''
This function provides a single student placement analytics report

Input - student data (cgpa, no_of_internships, no_of_projects, skills etc.)
Output - student placement report | contains predicted salary, placement probability, skill suggestions etc.

'''


def predict_student_placement(student_dict):
    dataframe = pd.DataFrame(student_dict)

    df_predicted = get_predicted_data(dataframe)
    is_placed = df_predicted.loc[0, 'is_placed']
    predicted_salary = df_predicted.loc[0, 'salary_as_fresher']
    placement_probability = df_predicted.loc[0, 'placement_probability']

    return {'is_placed': int(is_placed),
            'predicted_salary': float(predicted_salary),
            'placement_probability': (placement_probability)}


'''
This function provides a complete college placement analytics and 
newly generated excel sheet containing placement details of all
students 

Input - Excel sheet (contains students records)
Output - college placement report and new excel sheet with predictions and suggestions

'''


def predict_college_stats(excel_file):

    dataframe = load_data(excel_file=excel_file)

    df = get_predicted_data(dataframe)
    download_url = save_df_to_temp(df)

    data = df.drop(['s_id', 'name', 'other_skills', 'gender'], axis=1)
    mean_value_1 = data['inter_gpa'].mean()
    mean_value_2 = data['ssc_gpa'].mean()
    mean_value_3 = data['cgpa'].mean()
    # to fill the null values in the dataset
    data['inter_gpa'].fillna(value=mean_value_1, inplace=True)
    data['ssc_gpa'].fillna(value=mean_value_2, inplace=True)
    data['cgpa'].fillna(value=mean_value_3, inplace=True)
    data = df.drop(columns=['s_id', 'name', 'other_skills', 'gender'])
    data_1 = data.loc[:, ['tier', 'cgpa', 'inter_gpa', 'ssc_gpa', 'internships', 'no_of_projects', 'no_of_programming_languages',
                          'dsa', 'web_dev', 'mobile_dev', 'Machine Learning', 'cloud', 'is_placed', 'salary_as_fresher']]
    correlation_Data = data_1.corr()['is_placed'][:-1]
    corr_data = correlation_Data.sort_values(ascending=False)
    Final_list = {}
    Final_list['total_no_of_students'] = len(data)
    Final_list['total_placed'] = len(data[data['is_placed'] > 0])
    Final_list['total_not_placed'] = len(data[data['is_placed'] == 0])
    # Top Factors affecting placements
    # print("The top Parameters effecting the students placement are :\n")
    Full_abbrevation = {
        'tier': 'College Tier', 'cgpa': "CGPA",
        'inter_gpa': "XII Standard CGPA", 'ssc_gpa': "X Standard CGPA", 'internships': 'Number of Internships Done',
        'no_of_projects': 'No of Projects Done', 'is_participate_hackathon': 'Participated in Hackathon',
        'no_of_programming_languages': 'No of Programming Languages Known', 'dsa': "Data Structures and Algorithms",
        'mobile_dev': "Android Development", 'web_dev': "Web Development",
        'Machine Learning': "Machine Learning", 'cloud': "Cloud Computing"
    }
    top_factors_affecting_placements = list()
    for i in corr_data[1:6].index:
        top_factors_affecting_placements.append(Full_abbrevation[i])
    Final_list['top_factors_affecting_placements'] = top_factors_affecting_placements

    # Important technical skills which show impact on placements
    # print("The Following skills are very important to get placements\n")
    technical_skills = ['web_dev', 'Machine Learning', 'mobile_dev', 'cloud']
    imp_technical_skills = list()
    for i in corr_data.index:
        if i in technical_skills and corr_data[i] > 0.4:
            imp_technical_skills.append(Full_abbrevation[i])
    Final_list['imp_technical_skills'] = imp_technical_skills

    correlation_Data_1 = correlation_Data.values.tolist()
    correlation_data_1 = pd.DataFrame()
    correlation_data_1['parameter'] = data_1.columns[:-1]
    correlation_data_1['correlation'] = correlation_Data_1
    # EDA
    # Branch wise highest salary
    grouped_data = data.groupby('branch')['salary_as_fresher'].max()
    high_sal_each_branch = {}
    # Get the branches and corresponding highest salaries
    branches = grouped_data.index.tolist()
    highest_salaries = grouped_data.tolist()
    df_1 = pd.DataFrame()
    df_1['branches'] = branches
    df_1['highest_salaries'] = highest_salaries
    df_1.sort_values(by='highest_salaries', ascending=True, inplace=True)
    high_sal_each_branch['branches'] = df_1['branches'].tolist()
    high_sal_each_branch['highest_sal'] = df_1['highest_salaries'].tolist()
    Final_list['highest_sal_in_each_branch'] = high_sal_each_branch

    # Frequency Distribution of Salary for freshers
    salary_frequency = data[data['salary_as_fresher']
                            > 0]['salary_as_fresher'].value_counts()
    # salary_frequency_dict = salary_frequency.to_dict(orient='dict')
    Final_list['salary_distribution'] = {
        str(salary): count for salary, count in salary_frequency.items()}

    # Highest,average and least salary in each branch
    data_excludenull = data[data['salary_as_fresher'] != 0]
    grouped_data = data_excludenull.groupby(
        'branch')['salary_as_fresher'].agg(['max', 'mean', 'min'])

    # Get the branches and corresponding average, highest, and least salaries
    branches = grouped_data.index.tolist()
    avg_salaries = grouped_data['mean'].tolist()
    highest_salaries = grouped_data['max'].tolist()
    least_salaries = grouped_data['min'].tolist()
    branch_list = {}
    for i in range(len(branches)):
        branch_list[branches[i]] = {
            'average_sal': np.round(avg_salaries[i]),
            'highest_sal': np.round(highest_salaries[i]),
            'least_sal': np.round(least_salaries[i])
        }
    Final_list['Highest_avg_least_sal_in_each_branch'] = branch_list

    # Overall Campus Highest and average salary
    grouped_data = data[data['salary_as_fresher'] > 0]['salary_as_fresher'].agg(
        ['max', 'mean', 'min']).tolist()

    annotation_val = []

    for i in range(3):
        annotation_val.append(np.round(grouped_data[i]))
    annotation_val_dict = {
        'highest': annotation_val[0], 'Average': annotation_val[1], 'least': annotation_val[2]}
    # annotation_val_json = json.dumps(annotation_val_dict)
    Final_list['Overall_highest_average_least'] = annotation_val_dict

    # stats based on Range of salary
    above_20_lakhs = data[data['salary_as_fresher'] > 20]
    above_10_lakhs = data[data['salary_as_fresher'] > 10]
    # Group the data by 'branch' and calculate the count of students with salaries above 20 lakhs for each branch
    branch_counts_20 = above_20_lakhs.groupby(
        'branch')['salary_as_fresher'].count()
    branch_counts_10 = above_10_lakhs.groupby(
        'branch')['salary_as_fresher'].count()
    # Get the branches and corresponding counts
    student_counts_1 = branch_counts_20.tolist()
    student_counts_2 = branch_counts_10.tolist()
    # Create a bar plot

    if(len(branches) > len(branch_counts_20)):
        for i in range(len(branches)-len(branch_counts_20)):
            student_counts_1.append(0)

    if(len(branches) > len(branch_counts_10)):
        for i in range(len(branches)-len(branch_counts_10)):
            student_counts_2.append(0)
    # Above 20 LPA bar and pie
    above_20_bar = {}
    # Add labels and title
    for i in range(len(branches)):
        above_20_bar[branches[i]] = student_counts_1[i]
    Final_list['above_20_bar'] = above_20_bar

    df_above_20_lpa = data[data['salary_as_fresher'] > 20]

    # Group by College_Tier and calculate the percentage
    result_20 = df_above_20_lpa.groupby(
        'branch').size() / len(df_above_20_lpa) * 100
    above_20_pie = {
        'labels': result_20.index.tolist(),
        'values': np.round(result_20.values).tolist()
    }

    Final_list['above_20_pie'] = above_20_pie

    # above 10 LPA bar and pie
    above_10_bar = {}

    for i in range(len(branches)):
        above_10_bar[branches[i]] = student_counts_2[i]
    # Show the plot
    Final_list['above_10_bar'] = above_10_bar
    df_above_10_lpa = data[data['salary_as_fresher'] > 10]

    # Group by College_Tier and calculate the percentage
    result_10 = df_above_10_lpa.groupby(
        'branch').size() / len(df_above_10_lpa) * 100
    above_10_pie = {
        'labels': result_10.index.tolist(),
        'values': np.round(result_10.values).tolist()
    }
    Final_list['above_10_pie'] = above_10_pie

    # skills that are must to learn to get placement above the average
    Avg_salary = data['salary_as_fresher'].mean()
    skills = ['web_dev', 'dsa', 'Machine Learning']
    final_list = list()
    for i in range(len(data)):
        l = list()
        if(data.loc[i, 'salary_as_fresher'] > Avg_salary):
            for j in range(3):
                if(data.loc[i, skills[j]] == 1):
                    final_list.append(Full_abbrevation[skills[j]])
        if(len(l) != 0):
            final_list.append(l)

    # following skills are required to get the average salary
    #print("the following skills are required to get the Average salary")
    Final_list['skills_req_to_get_avg_sal'] = np.unique(final_list).tolist()

    # Min no of internships to be done to get the average package
    # final_list_internships=list()
    # for i in range(len(data)):
    #   l=list()
    #   if(data.loc[i,'salary_as_fresher']>Avg_salary):
    #     if(data.loc[i,'internships']>0):
    #       final_list_internships.append(data.loc[i,'internships'])
    #   if(len(l)!=0):
    #     final_list_internships.append(l)
    # Final_list['min_no_of_internships_to_get_avg_sal']=np.median(final_list_internships).astype('int')
    final_list_internships = []
    for i in range(len(data)):
        if data.loc[i, 'salary_as_fresher'] > Avg_salary and data.loc[i, 'internships'] > 0:
            final_list_internships.append(data.loc[i, 'internships'])
    if len(final_list_internships) > 0:
        Final_list['min_no_of_internships_to_get_avg_sal'] = int(
            np.median(final_list_internships))
    else:
        Final_list['min_no_of_internships_to_get_avg_sal'] = 0

    final_list_projects = []
    for i in range(len(data)):
        if data.loc[i, 'salary_as_fresher'] > Avg_salary and data.loc[i, 'no_of_projects'] > 0:
            final_list_projects.append(data.loc[i, 'no_of_projects'])
    min_projects = int(np.median(final_list_projects)) if len(
        final_list_projects) > 0 else 0
    Final_list['min_no_of_projects_to_get_avg_sal'] = min_projects

    skills_data = data
    skills_filter = (skills_data['web_dev'] > 0) | (
        skills_data['Machine Learning'] > 0)
    projects_with_skills = skills_data.loc[skills_filter, 'no_of_projects']

    no_skills_filter = (skills_data['web_dev'] == 0) & (
        skills_data['Machine Learning'] == 0)
    projects_no_skills = skills_data.loc[no_skills_filter, 'no_of_projects']

    average_projects_with_skills = int(np.round(projects_with_skills.mean()))
    average_projects_no_skills = int(np.round(projects_no_skills.mean(
        skipna=True))) if not projects_no_skills.isnull().all() else 0

    annotation_val = {'with Skills': average_projects_with_skills,
                      'Without skills': average_projects_no_skills}
    Final_list['avg_projects_vs_technical_skills'] = annotation_val
    dsa_skills = data
    skills_dsa_filter = (dsa_skills['dsa'] > 0)
    with_dsa_skills = dsa_skills.loc[skills_dsa_filter,
                                     'no_of_programming_languages']

    no_dsa_skills_filter = (dsa_skills['dsa'] == 0)
    with_no_dsa_skills = dsa_skills.loc[no_dsa_skills_filter,
                                        'no_of_programming_languages']

    average_dsa_skills = int(np.round(with_dsa_skills.mean()))
    average_with_no_dsa_skills = int(np.round(with_no_dsa_skills.mean()))

    annotation_val = {'Skilled in DSA': average_dsa_skills,
                      'Poor in DSA': average_with_no_dsa_skills}
    Final_list['programming_lang_vs_skilled_in_dsa'] = annotation_val

    placed_data = data.groupby('branch')['is_placed'].mean() * 100
    notplaced_data = (1 - data.groupby('branch')['is_placed'].mean())*100
    placed_notplaced_df = {
        'is_placed': placed_data.astype('int'),
        'is_not_placed': notplaced_data.astype('int')
    }
    data_placed_notplaced = pd.DataFrame(placed_notplaced_df)
    data_placed_notplaced['branch'] = data_placed_notplaced.index
    annotation = {
        'branch': data_placed_notplaced.branch.tolist(),
        'is_placed_percent': np.round(data_placed_notplaced.is_placed).tolist(),
        'is_not_placed_percent': np.round(data_placed_notplaced.is_not_placed).tolist()
    }
    Final_list['percent_placed_notplaced_ineach_branch'] = annotation

    data_sal = data[data['salary_as_fresher'] != 0]
    data_sal.sort_values(by='salary_as_fresher', ascending=True, inplace=True)
    cdf_sal_by_branch = {}
    for branch, group_data in data_sal.groupby('branch'):
        cdf_sal_by_branch[branch] = np.unique(
            group_data['salary_as_fresher']).astype('int').tolist()
    Final_list['cdf_sal_by_branch'] = cdf_sal_by_branch

    expected_sal_by_no_of_projects = {
        'No_of_projects': data.groupby('no_of_projects')['salary_as_fresher'].mean().index.tolist(),
        'Salary': np.round(data.groupby('no_of_projects')['salary_as_fresher'].mean().values).tolist()
    }
    Final_list['expected_sal_by_no_of_projects'] = expected_sal_by_no_of_projects

    expected_sal_by_no_of_internships = {
        'No_of_internships': data.groupby('internships')['salary_as_fresher'].mean().index.tolist(),
        'Salary': np.round(data.groupby('internships')['salary_as_fresher'].mean().values).tolist()
    }
    Final_list['expected_sal_by_no_of_internships'] = expected_sal_by_no_of_internships

    expected_sal_by_no_of_programming_lan = {
        'No_of_programming_languages': data.groupby('no_of_programming_languages')['salary_as_fresher'].mean().index.tolist(),
        'Salary': np.round(data.groupby('no_of_programming_languages')['salary_as_fresher'].mean().values).tolist()
    }
    Final_list['expected_sal_by_no_of_programming_lan'] = expected_sal_by_no_of_programming_lan
    Final_list['Average_sal'] = np.round(data['salary_as_fresher'].mean())
    return Final_list, download_url
