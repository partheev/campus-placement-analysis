import { useState } from 'react';
import { Overview } from './Overview';
import { Analysis } from './analysis';

const Campus = () => {
    let [campusStats, setcampusStats] = useState(
        '{"Highest_avg_least_sal_in_each_branch":{"CSE":{"average_sal":24,"highest_sal":26,"least_sal":20},"ECE":{"average_sal":19,"highest_sal":22,"least_sal":17}},"Overall_highest_average":{"Average":21,"highest":26},"above_10_bar":{"CSE":3,"ECE":3},"above_10_pie":{"labels":["CSE","ECE"],"values":[50,50]},"above_20_bar":{"CSE":2,"ECE":1},"above_20_pie":{"labels":["CSE","ECE"],"values":[67,33]},"avg_projects_vs_technical_skills":{"Without skills":0,"with Skills":4},"cdf_sal_by_branch":{"CSE":[19,26],"ECE":[17,18,22]},"expected_sal_by_no_of_internships":{"X":[1,0,2,1,2,1],"Y":[26,26,18,19,17,22]},"expected_sal_by_no_of_programming_lan":{"X":[5,4,2,4,2,3],"Y":[26,26,18,19,17,22]},"expected_sal_by_no_of_projects":{"X":[6,6,3,3,4,2],"Y":[26,26,18,19,17,22]},"highest_sal_in_each_branch":{"branches":["ECE","CSE"],"highest_sal":[22,26]},"imp_technical_skills":[],"min_no_of_internships_to_get_avg_sal":1,"min_no_of_projects_to_get_avg_sal":6,"percent_placed_notplaced_ineach_branch":{"branch":["CSE","ECE"],"is_not_placed_percent":[0,0],"is_placed_percent":[100,100]},"programming_lang_vs_skilled_in_dsa":{"Poor in DSA":2,"Skilled in DSA":4},"salary_distribution":{"17.0":1,"18.0":1,"19.5":1,"22.0":1,"26.0":2},"skills_req_to_get_avg_sal":["Machine Learning","dsa","web_dev"],"top_factors_affecting_placements":["cgpa","inter_gpa","ssc_gpa","internships","no_of_projects"]}'
    );

    campusStats = JSON.parse(campusStats);

    return (
        <>
            {campusStats ? (
                <Analysis campusStats={campusStats} />
            ) : (
                <Overview setcampusStats={setcampusStats} />
            )}
        </>
    );
};

export default Campus;
