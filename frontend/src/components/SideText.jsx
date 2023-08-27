import PropTypes from 'prop-types'

export const SideText = ({ children, style }) => {
  return (
    <div>
      <h2
        style={{
          fontSize: '25px',
          fontWeight: 600,
          fontFamily: 'var(--font-secondary)',
          ...style,
        }}
      >
        {children}
      </h2>
    </div>
  )
}

SideText.propTypes = {
  children: PropTypes.string,
  style: PropTypes.object,
}
