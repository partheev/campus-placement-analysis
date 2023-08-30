import { Card, Divider } from '@mui/material';
import PropTypes from 'prop-types';
export const MinimumInternshipProjectsAvgSalary = ({
    minimumInternships,
    minimumProjects,
}) => {
    return (
        <Card sx={{}}>
            <div
                style={{
                    textAlign: 'center',
                    color: 'var(--blue-black)',
                    fontFamily: 'var(--font-primary)',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    margin: '0.5rem 0',
                }}
            >
                To Get Average Salary
            </div>
            <div
                style={{
                    display: 'flex',
                    marginBottom: '0.5rem',
                    justifyContent: 'space-around',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        fontFamily: 'var(--font-primary)',
                    }}
                >
                    <div>Minimum Internships</div>
                    <div
                        style={{
                            fontSize: '1.2rem',
                            fontWeight: '600',
                        }}
                    >
                        {minimumInternships}
                    </div>
                </div>
                <Divider orientation='vertical' flexItem />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        fontFamily: 'var(--font-primary)',
                    }}
                >
                    <div>Minimum Projects</div>
                    <div
                        style={{
                            fontSize: '1.2rem',
                            fontWeight: '600',
                        }}
                    >
                        {minimumProjects}
                    </div>
                </div>
            </div>
        </Card>
    );
};

MinimumInternshipProjectsAvgSalary.propTypes = {
    minimumInternships: PropTypes.number,
    minimumProjects: PropTypes.number,
};
