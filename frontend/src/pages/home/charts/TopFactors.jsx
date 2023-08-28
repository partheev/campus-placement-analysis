import { SideText } from '../../../components/SideText'
import { BiSolidRightArrow } from 'react-icons/bi'
import PropTypes from 'prop-types'
import styles from '../home.module.css'
import { motion } from 'framer-motion'
import { Container } from '@mui/material'

const Item = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={styles.item}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: '8px',
        margin: '0 0 5px 0',
        padding: '0 2px',
      }}
    >
      <BiSolidRightArrow /> <SideText noIcon={true}>{children}</SideText>
    </motion.div>
  )
}
export const TopFactors = ({ isMobile }) => {
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
        // backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
        backgroundColor: '#f6f6f6',
      }}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        style={{ width: '1px', zIndex: 4 }}
      >
        {!isMobile ? (
          <div style={{ position: 'absolute', width: '10rem' }}>
            <motion.img
              variants={imgVariants}
              style={{ width: '100%' }}
              src="/static/images/Rectangle_img.webp"
            />
          </div>
        ) : (
          ''
        )}
      </motion.div>
      <Container maxWidth="lg">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            position: 'relative',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ padding: '2px' }}>
            <h1 style={{ textAlign: 'center' }}>
              Top Factors Affecting Placements
            </h1>

            <div style={{ rowGap: '4px' }}>
              <Item>Number Of Programming Languages</Item>
              <Item>CGPA</Item>
              <Item>Number of Projects</Item>
              <Item>Internships</Item>
            </div>
          </div>
          <div
            style={{
              width: '18rem',
              zIndex: 0,
              position: 'absolute',
              top: 190,
              right: 100,
              opacity: 0.4,
              transform: 'rotate(-10deg)',
            }}
          >
            <img
              style={{ width: '100%' }}
              src="/static/images/back-view-of-monitor-and-keyboard.png"
            />
          </div>
          <div style={{ padding: '8px' }}>
            <h1 style={{ textAlign: 'center' }}>
              Averaging Package Vital Skills
            </h1>
            <Item>Machine Learning</Item>
            <Item>Web Development</Item>
          </div>
        </div>
      </Container>
    </div>
  )
}

Item.propTypes = {
  children: PropTypes.string,
}

TopFactors.propTypes = {
  isMobile: PropTypes.bool,
}
