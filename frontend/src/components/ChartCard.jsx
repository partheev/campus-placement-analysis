import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
export const ChartCard = ({ children, style = {}, headingTitle, subTitle }) => {
    return (
        <div
            style={{
                backgroundColor: 'white',
                borderRadius: '30px',
                padding: '1rem',
                height: '100%',
                ...style,
            }}
        >
            <Typography
                sx={{
                    textAlign: 'center',
                    fontFamily: 'var(--font-secondary)',
                    fontWeight: '800',
                    color: 'var(--blue-black)',
                }}
            >
                {headingTitle}
            </Typography>
            {subTitle && (
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontFamily: 'var(--font-secondary)',
                        fontWeight: '600',
                        fontSize: '0.8rem',
                        color: 'var(--blue-black)',
                    }}
                >
                    {subTitle}
                </Typography>
            )}
            {children}
        </div>
    );
};

ChartCard.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    headingTitle: PropTypes.string,
    subTitle: PropTypes.string,
};
