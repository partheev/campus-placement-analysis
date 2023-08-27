import PropTypes from 'prop-types'
import styles from './text.module.css'
export const HeadText = ({ children, style }) => {
  return (
    <div>
      <h1
        className={styles.text}
        style={{
          ...style,
        }}
      >
        {children}
      </h1>
    </div>
  )
}

HeadText.propTypes = {
  children: PropTypes.string,
  style: PropTypes.object,
}
