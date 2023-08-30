import { Box } from '@mui/material';
import PropTypes from 'prop-types';
export const DownloadExcel = ({ downloadURL }) => {
    return (
        <a href={downloadURL} download='predictions.csv'>
            <Box
                sx={{
                    ':hover': {
                        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                    },
                    display: 'inline-block',
                    outline: 'none',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '0.3rem 0.8rem',
                    fontWeight: '800',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    backgroundColor: 'rgb(99,102,241)',
                    color: 'white',
                    fontFamily: 'var(--font-secondary)',
                }}
            >
                Generate Excel
            </Box>
        </a>
    );
};

DownloadExcel.propTypes = {
    onClick: PropTypes.func,
    downloadURL: PropTypes.string,
};
