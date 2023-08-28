import { Container } from '@mui/material'
import styles from '../home.module.css'
import { HeadText } from '../../../components/Headtext'
import { SideText } from '../../../components/SideText'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

export const PlacedVsNot = ({ isMobile }) => {
  const imgVariants = {
    offscreen: {
      y: 400,
      opacity: 0,
    },
    onscreen: {
      y: -135,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.5,
      },
    },
  }
  return (
    <div
      style={{
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxHeight: '100vh',
        padding: '4rem 0',
        // backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
        backgroundColor: '#f6f6f6',
        position: 'relative',
      }}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        style={{ width: '1px' }}
      >
        {!isMobile ? (
          <div style={{ position: 'absolute', width: '10rem' }}>
            <motion.img
              variants={imgVariants}
              style={{ width: '100%' }}
              src="/static/images/Rectangle_img_pink.webp"
            />
          </div>
        ) : (
          ''
        )}
      </motion.div>
      <Container maxWidth="lg">
        <HeadText>Multi-Tier Branch Placement status Overview</HeadText>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={styles.placedvsnot_chart}>
            <img
              style={{ width: '100%' }}
              src="/static/charts/placed_vs_notplaced.png"
            />
          </div>
        </div>
        <SideText>
          Combining all tiers, this graph illustrates student placement
          percentages within each branch. Varied placement rates indicate
          branches with promising job opportunities.
        </SideText>
      </Container>
    </div>
  )
}

PlacedVsNot.propTypes = {
  isMobile: PropTypes.bool,
}
