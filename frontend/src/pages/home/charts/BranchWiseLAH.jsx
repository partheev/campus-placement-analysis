import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

export const BranchWiseLAH = ({ isMobile }) => {
  const imgVariants = {
    offscreen: {
      y: 500,
      x: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.5,
        bounce: 0.4,
      },
    },
  }
  return (
    <div
      style={{
        margin: '5rem 0',
      }}
    >
      {/* <h1
          style={{
            textAlign: 'center',
            margin: '5rem 0',
          }}
        >
          Least Average Highest Salaries
        </h1> */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ width: '40rem' }}>
          <img
            style={{ width: '100%' }}
            src="/static/charts/branch_wise_least_avg,highest.png"
          />
        </div>

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
              src="/static/images/illustrator2.png"
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}

BranchWiseLAH.propTypes = {
  isMobile: PropTypes.bool,
}
