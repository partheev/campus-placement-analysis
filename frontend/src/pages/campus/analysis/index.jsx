import PropTypes from 'prop-types';
import { HighSalaryEachBranch } from './charts/HighSalaryEachBranch';
import { Container } from '@mui/material';

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
                <HighSalaryEachBranch
                    branches={campusStats.highest_sal_in_each_branch.branches}
                    highest_salaries={
                        campusStats.highest_sal_in_each_branch.highest_sal
                    }
                />
            </Container>
        </div>
    );
};

Analysis.propTypes = {
    campusStats: PropTypes.object,
};
