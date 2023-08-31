import { Container } from '@mui/material'
import { HeadText } from '../../../components/Headtext'
import { SideText } from '../../../components/SideText'
import styles from '../home.module.css'
import PropTypes from 'prop-types'

import { motion } from 'framer-motion'

export const Factors = ({ isMobile }) => {
  const imgVariants = {
    offscreen: {
      y: 400,

      opacity: 0,
    },
    onscreen: {
      y: -190,
      x: 0,
      opacity: 0.5,
      transition: {
        type: 'spring',
        duration: 1.5,
      },
    },
  }
  return (
    <div
      style={
        {
          // background:
          //   'radial-gradient(circle, rgba(203,100,115,0.8268557422969187) 0%, rgba(255,255,255,1) 59%)',
        }
      }
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        style={{ width: '1px' }}
      >
        {!isMobile ? (
          <div style={{ position: 'absolute', width: '10rem', right: 0 }}>
            <motion.img
              variants={imgVariants}
              style={{ width: '100%' }}
              src="/static/images/Rectangle_img_blue.webp"
            />
          </div>
        ) : (
          ''
        )}
      </motion.div>
      <Container maxWidth="lg">
        <HeadText>Key Placement Influencers</HeadText>
        <SideText style={{ width: '100%' }}>
          The pie chart visually breaks down factors influencing placement,
          showing their relative impact through percentages, which determines
          student employability.{' '}
        </SideText>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '3rem 0',
            flexWrap: 'wrap',
          }}
        >
          <div className={styles.factors_chart}>
            <img
              style={{ width: '100%' }}
              src="/static/charts/factors_affect_on.png"
            />
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  )
}

Factors.propTypes = {
  isMobile: PropTypes.bool,
}
