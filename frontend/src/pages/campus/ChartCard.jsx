import PropTypes from 'prop-types';
export const ChartCard = ({ children, style = {} }) => {
    return (
        <div
            style={{
                ...style,
                backgroundColor: 'white',
                borderRadius: '30px',
                padding: '1rem',
            }}
        >
            {children}
        </div>
    );
};

ChartCard.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
};
