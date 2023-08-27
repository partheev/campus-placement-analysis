import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { HeadText } from '../../../components/Headtext'

export const LeastAvgHighest = ({ isMobile }) => {
  const imgVariants = {
    offscreen: {
      y: 400,
      x: -50,
      opacity: 0.1,
    },
    onscreen: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.5,
      },
    },
  }
  return (
    <div>
      <HeadText>Least Average Highest Salaries</HeadText>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {!isMobile && (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            style={{ width: '20rem' }}
          >
            <motion.img
              variants={imgVariants}
              style={{ width: '100%' }}
              src="/static/images/startups,-entrepreneurship-and-growth.png"
            />
          </motion.div>
        )}
        <div style={{ width: '40rem' }}>
          <img
            style={{ width: '100%' }}
            src="/static/charts/least_avg_highest_tier1.png"
          />
        </div>
      </div>
    </div>
  )
}

LeastAvgHighest.propTypes = {
  isMobile: PropTypes.bool,
}
