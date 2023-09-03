import PropTypes from 'prop-types';
import { HighSalaryEachBranch } from './charts/HighSalaryEachBranch';
import { Container, Grid, Stack, Typography } from '@mui/material';
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
import { SkillsRequiredForAvgSalary } from './SkillsRequiredForAvgSalary';
import { ImpTechnicalSkills } from './ImpTechnicalSkills';
import { MinimumInternshipProjectsAvgSalary } from './MinimumInternshipProjectsAvgSalary';
import { ExpectedSalaryInternships } from './charts/ExpectedSalaryInternships';
import { ExpectedSalaryProgLang } from './charts/ExpectedSalaryProgLang';
import { ExpectedSalaryProject } from './charts/ExpectedSalaryProject';

export const Analysis = ({ campusStats, onBack, downloadURL }) => {
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
                        onClick={onBack}
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
                    Campus Placements Predictions & Analytics
                </Typography>

                <Typography
                    textAlign={'left'}
                    sx={{
                        margin: '1rem 0',
                        color: 'var(--blue-black)',
                        fontFamily: 'var(--font-primary)',
                        fontSize: '0.9rem',
                        fontWeight: '400',
                    }}
                >
                    * Note: These analytics are generated from the placement
                    predictions. Below shown statistics are expected placement
                    results of your campus.
                </Typography>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <DownloadExcel downloadURL={downloadURL} />
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
                {/* <CDFSalaryBranch /> */}

                <Grid
                    container
                    alignItems={'stretch'}
                    columnSpacing={'1rem'}
                    rowSpacing={'1rem'}
                >
                    <Grid item md={6} xs={12} height={'100%'}>
                        <Stack rowGap={'1rem'} height={'100%'}>
                            <MinimumInternshipProjectsAvgSalary
                                minimumInternships={
                                    campusStats.min_no_of_internships_to_get_avg_sal
                                }
                                minimumProjects={
                                    campusStats.min_no_of_projects_to_get_avg_sal
                                }
                            />
                            {campusStats.skills_req_to_get_avg_sal &&
                                campusStats.skills_req_to_get_avg_sal.length >
                                    0 && (
                                    <SkillsRequiredForAvgSalary
                                        skills={
                                            campusStats.skills_req_to_get_avg_sal
                                        }
                                    />
                                )}
                            {campusStats.imp_technical_skills &&
                                campusStats.imp_technical_skills.length > 0 && (
                                    <ImpTechnicalSkills
                                        technical_skills={
                                            campusStats.imp_technical_skills
                                        }
                                    />
                                )}
                        </Stack>
                    </Grid>

                    <Grid item md={6} xs={12} height={'100%'}>
                        <HighAvgLeastEachBranch
                            data={
                                campusStats.Highest_avg_least_sal_in_each_branch
                            }
                        />
                    </Grid>

                    <Grid item md={4} xs={12}>
                        <Grid
                            container
                            rowSpacing={'1rem'}
                            columnSpacing={'1rem'}
                        >
                            <Grid item xs={12} sm={6} md={12}>
                                <StudPercent20LPABranch
                                    data={campusStats.above_20_pie}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={12}>
                                <StudPercent10LPABranch
                                    data={campusStats.above_10_pie}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <PlacedVsNotPlacedEachBranch
                            data={
                                campusStats.percent_placed_notplaced_ineach_branch
                            }
                        />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <HighSalaryEachBranch
                            branches={
                                campusStats.highest_sal_in_each_branch.branches
                            }
                            highest_salaries={
                                campusStats.highest_sal_in_each_branch
                                    .highest_sal
                            }
                        />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <ProgLangVsDSA
                            data={
                                campusStats.programming_lang_vs_skilled_in_dsa
                            }
                        />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <AvgProjWithAndWithoutSkills
                            data={campusStats.avg_projects_vs_technical_skills}
                        />
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        <ExpectedSalaryInternships
                            data={campusStats.expected_sal_by_no_of_internships}
                        />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <ExpectedSalaryProgLang
                            data={
                                campusStats.expected_sal_by_no_of_programming_lan
                            }
                        />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <ExpectedSalaryProject
                            data={campusStats.expected_sal_by_no_of_projects}
                        />
                    </Grid>

                    <Grid item></Grid>
                </Grid>
            </Container>
        </div>
    );
};

Analysis.propTypes = {
    campusStats: PropTypes.object,
    onBack: PropTypes.func,
    downloadURL: PropTypes.string,
};
