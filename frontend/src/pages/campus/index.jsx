import { useState } from 'react';
import { Overview } from './Overview';
import { Analysis } from './analysis';

const Campus = () => {
    const [campusStats, setcampusStats] = useState(
        JSON.parse(
            '{"Highest_avg_least_sal_in_each_branch":{"CSE":{"average_sal":19,"highest_sal":26,"least_sal":12},"ECE":{"average_sal":16,"highest_sal":24,"least_sal":11},"MECH":{"average_sal":15,"highest_sal":19,"least_sal":8}},"Overall_highest_average_least":{"Average":17,"highest":26,"least":8},"above_10_bar":{"CSE":12,"ECE":18,"MECH":5},"above_10_pie":{"labels":["CSE","ECE","MECH"],"values":[34,51,14]},"above_20_bar":{"CSE":4,"ECE":3,"MECH":0},"above_20_pie":{"labels":["CSE","ECE"],"values":[57,43]},"avg_projects_vs_technical_skills":{"Without skills":2,"with Skills":3},"cdf_sal_by_branch":{"CSE":[12,15,16,18,19,20,23,25,26],"ECE":[11,12,13,14,15,16,17,18,22,24],"MECH":[8,13,15,16,18,19]},"expected_sal_by_no_of_internships":{"X":[1,0,2,1,2,1,4,2,1,2,1,2,2,3,4,2,1,2,2,3,2,2,3,3,1,1,1,1,2,1,0,0,0,0,0,0,1,1,1,2,1,2],"Y":[26,26,18,19,17,22,12,18,19,17,22,14,15,16,24,12,12,18,16,15,13,15,17,15,14,11,15,20,23,25,0,0,0,0,0,0,18,19,15,16,13,8]},"expected_sal_by_no_of_programming_lan":{"X":[5,4,2,4,2,3,3,2,4,2,3,4,3,3,3,3,3,4,4,4,3,4,2,4,3,3,4,4,4,4,0,0,0,0,0,0,2,4,1,1,4,2],"Y":[26,26,18,19,17,22,12,18,19,17,22,14,15,16,24,12,12,18,16,15,13,15,17,15,14,11,15,20,23,25,0,0,0,0,0,0,18,19,15,16,13,8]},"expected_sal_by_no_of_projects":{"X":[6,6,3,3,4,2,2,3,3,4,2,2,4,2,5,4,3,3,3,3,2,2,4,3,2,3,4,2,3,2,0,0,0,0,0,0,3,3,4,2,3,4],"Y":[26,26,18,19,17,22,12,18,19,17,22,14,15,16,24,12,12,18,16,15,13,15,17,15,14,11,15,20,23,25,0,0,0,0,0,0,18,19,15,16,13,8]},"highest_sal_in_each_branch":{"branches":["MECH","ECE","CSE"],"highest_sal":[19,24,26]},"imp_technical_skills":["Web Development"],"min_no_of_internships_to_get_avg_sal":2,"min_no_of_projects_to_get_avg_sal":3,"percent_placed_notplaced_ineach_branch":{"branch":["CSE","ECE","MECH"],"is_not_placed_percent":[14,14,14],"is_placed_percent":[85,85,85]},"programming_lang_vs_skilled_in_dsa":{"Poor in DSA":1,"Skilled in DSA":4},"salary_distribution":{"11.0":1,"12.0":3,"13.0":2,"14.0":2,"15.0":6,"16.0":3,"17.0":3,"18.0":4,"19.0":1,"19.5":2,"20.0":1,"22.0":2,"23.0":1,"24.0":1,"25.0":1,"26.0":2,"8.0":1},"skills_req_to_get_avg_sal":["Data Structures and Algorithms","Machine Learning","Web Development"],"top_factors_affecting_placements":["XII Standard CGPA","CGPA","X Standard CGPA","No of Programming Languages Known","No of Projects Done"],"total_no_of_students":42,"total_not_placed":6,"total_placed":36}'
        )
    );

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
