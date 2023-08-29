import PropTypes from 'prop-types';
export const BoxCard = ({
    children,
    style = {},
    borderColor,
    title,
    value,
}) => {
    return (
        <div
            style={{
                backgroundColor: 'white',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderTop: '3px solid ' + borderColor,
                ...style,
            }}
        >
            <div
                style={{
                    fontSize: '1rem',
                    fontFamily: 'var(--font-primary)',
                    color: 'rgb(112,128,144)',
                }}
            >
                {title}
            </div>
            <div
                style={{
                    color: 'rgb(47,79,79)',
                    fontSize: '1.5rem',
                    fontFamily: 'var(--font-primary)',
                    fontWeight: '600',
                }}
            >
                {value}
            </div>
            {children && <div>{children}</div>}
        </div>
    );
};

BoxCard.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    borderColor: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
};
