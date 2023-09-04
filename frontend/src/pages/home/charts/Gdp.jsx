import { Container } from '@mui/material'
import { HeadText } from '../../../components/Headtext'
import { SideText } from '../../../components/SideText'
import styles from '../home.module.css'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

export const Gdp = ({ isMobile }) => {
  const imgVariants = {
    offscreen: {
      rotate: 0,
      scale: 0,
      opacity: 0,
      y: 50,
    },
    onscreen: {
      rotate: 405,
      opacity: 0.5,
      scale: 1,
      y: 50,
      transition: {
        type: 'spring',
        duration: 3,
        delay: 1,
        stiffness: 20,
      },
    },
  }
  return (
    <div
      style={{
        background:
          'linear-gradient(0deg, rgba(246,246,246,1) 1%, rgba(213,255,208,1) 35%, rgba(219,250,170,1) 65%, rgba(255,255,255,1) 98%)',
        padding: '3rem 0',
      }}
    >
      {!isMobile ? (
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.img
            style={{
              position: 'absolute',
              left: -200,
              transform: 'rotate(45deg)',
              width: '30rem',
            }}
            variants={imgVariants}
            width="100%"
            src="/static/images/earth-day-icons.png"
          ></motion.img>
        </motion.div>
      ) : (
        ''
      )}
      <Container maxWidth="lg">
        <HeadText>
          Comparison of GDP Growth and Job Creation Trends: India vs. United
          States insight
        </HeadText>
        <SideText>
          Job creation closely mirrors GDP growth in both India and the United
          States, demonstrating the direct relationship between economic
          expansion and employment opportunities.
        </SideText>
        <div className={styles.gdp_chart}>
          <img
            width="100%"
            src="/static/charts/gdpVSjob.png"
            alt="GDP VS Jobs"
          />
        </div>
        {!isMobile ? (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.img
              style={{
                position: 'absolute',

                left: -200,
                transform: 'rotate(45deg)',
                width: '30rem',
              }}
              variants={imgVariants}
              width="100%"
              src="/static/images/earth-day-icons1.png"
            ></motion.img>
          </motion.div>
        ) : (
          ''
        )}
        <HeadText>
          Comparison of GDP Growth and Student Placement Trends: India vs.
          United States
        </HeadText>
        <SideText>
          GDP growth appears to closely influence changes in student placement
          percentages in India
        </SideText>
        <div className={styles.gdp_chart}>
          <img
            width="100%"
            src="/static/charts/gdpVSplaced.png"
            alt="GDP VS Jobs"
          />
        </div>
      </Container>
    </div>
  )
}

Gdp.propTypes = {
  isMobile: PropTypes.bool,
}
