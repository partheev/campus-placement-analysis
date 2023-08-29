import PropTypes from 'prop-types';
import { HighSalaryEachBranch } from './charts/HighSalaryEachBranch';
import { Container, Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
import { DownloadExcel } from './DownloadExcel';

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
                <div
                    style={{
                        justifyContent: 'space-between',
                        display: 'flex',
                    }}
                >
                    <div
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '0.5rem',
                        }}
                    >
                        <ArrowBackIcon
                            fontSize='large'
                            sx={{
                                color: 'var(--blue-black)',
                            }}
                        />
                        <span
                            style={{
                                color: 'var(--blue-black)',
                                fontSize: '1.3rem',
                                fontFamily: 'var(--font-primary)',
                            }}
                        >
                            Back
                        </span>
                    </div>
                </div>
                <Typography
                    textAlign={'center'}
                    sx={{
                        margin: '1rem 0',
                        color: 'var(--blue-black)',
                        fontFamily: 'var(--font-primary)',
                        fontSize: '2rem',
                        fontWeight: '600',
                    }}
                >
                    Campus Placements Analytics
                </Typography>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <DownloadExcel />
                </div>
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
