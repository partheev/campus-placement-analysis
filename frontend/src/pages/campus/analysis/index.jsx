import PropTypes from 'prop-types';
import { HighSalaryEachBranch } from './charts/HighSalaryEachBranch';
import { Container, Grid } from '@mui/material';
import { HighAvgLeastEachBranch } from './charts/HighAvgLeastEachBranch';
import { StudPercent20LPABranch } from './charts/StudPercent20LPABranch';
import { StudPercent10LPABranch } from './charts/StudPercent10LPABranch';
import { AvgProjWithAndWithoutSkills } from './charts/AvgProjWithAndWithoutSkills';
import { ProgLangVsDSA } from './charts/ProgLangVsDSA';
import { PlacedVsNotPlacedEachBranch } from './charts/PlacedVsNotPlacedEachBranch';
import {
    StudentsNotPlaced,
    StudentsPlaced,
    StudentsPlacedPercent,
    TotalStudents,
} from './charts/DataBoxes';

export const Analysis = ({ campusStats }) => {
    console.log(campusStats);
    return (
        <div
            style={{
                paddingTop: '2rem',
                minHeight: '100vh',
                backgroundColor: 'var(--campus-analysis-bg)',
            }}
        >
            <Container maxWidth='lg'>
                <Grid
                    sx={{ marginTop: '0.5rem', marginBottom: '1rem' }}
                    container
                    columnSpacing={'0.5rem'}
                    rowSpacing={'0.5rem'}
                >
                    <Grid item lg={3} sm={6} xs={12}>
                        <TotalStudents
                            totalStudents={campusStats.total_no_of_students}
                        />
                    </Grid>
                    <Grid item lg={3} sm={6} xs={12}>
                        <StudentsPlaced
                            studentsPlaced={campusStats.total_placed}
                        />
                    </Grid>
                    <Grid item lg={3} sm={6} xs={12}>
                        <StudentsNotPlaced
                            studentsNotPlaced={campusStats.total_not_placed}
                        />
                    </Grid>
                    <Grid item lg={3} sm={6} xs={12}>
                        <StudentsPlacedPercent
                            studentsPlacedPercent={(
                                (campusStats.total_placed /
                                    campusStats.total_no_of_students) *
                                100
                            ).toFixed(1)}
                        />
                    </Grid>
                </Grid>
                <HighSalaryEachBranch
                    branches={campusStats.highest_sal_in_each_branch.branches}
                    highest_salaries={
                        campusStats.highest_sal_in_each_branch.highest_sal
                    }
                />
                <HighAvgLeastEachBranch
                    data={campusStats.Highest_avg_least_sal_in_each_branch}
                />
                <StudPercent20LPABranch data={campusStats.above_20_pie} />
                <StudPercent10LPABranch data={campusStats.above_10_pie} />
                <AvgProjWithAndWithoutSkills
                    data={campusStats.avg_projects_vs_technical_skills}
                />
                <ProgLangVsDSA
                    data={campusStats.programming_lang_vs_skilled_in_dsa}
                />
                <PlacedVsNotPlacedEachBranch
                    data={campusStats.percent_placed_notplaced_ineach_branch}
                />
            </Container>
        </div>
    );
};

Analysis.propTypes = {
    campusStats: PropTypes.object,
};
