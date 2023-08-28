import PropTypes from 'prop-types'
import styles from './text.module.css'
import { MdInsights } from 'react-icons/md'
export const SideText = ({ children, style, noIcon }) => {
  return (
    <div className={styles.sideText_div}>
      <h2
        className={styles.sideText}
        style={{
          textAlign: 'center',

          ...style,
        }}
      >
        {!noIcon ? <MdInsights style={{ marginRight: '8px' }} /> : ''}
        {children}
      </h2>
    </div>
  )
}

SideText.propTypes = {
  children: PropTypes.string,
  style: PropTypes.object,
  noIcon: PropTypes.bool,
}
