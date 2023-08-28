import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PropTypes from 'prop-types'
import styles from '../home.module.css'
import { Container } from '@mui/material'
import { HeadText } from '../../../components/Headtext'
import { CgpaTier1 } from '../../../components/charts/CgpaTier1'
import { CgpaTier2 } from '../../../components/charts/CgpaTier2'
import { CgpaTier3 } from '../../../components/charts/CgpaTier3'
import { SideText } from '../../../components/SideText'

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance])
}

const Chart = ({ img, tier, isMobile, insight }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 260)
  return (
    <div
      style={{
        position: 'relative',
        zIndex: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={
          isMobile
            ? {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }
            : { display: 'flex', alignItems: 'center' }
        }
      >
        <div ref={ref} className={styles.cgpa_chart_background}>
          {img}
        </div>
        {!isMobile ? (
          <motion.h3
            style={{
              y,

              fontFamily: 'var(--font-secondary)',

              marginLeft: '18px',
              whiteSpace: 'nowrap',
            }}
            className={styles.cgpa_tier}
          >
            TIER {tier}
          </motion.h3>
        ) : (
          <h3 style={{ textAlign: 'center' }}>TIER {tier}</h3>
        )}
      </div>
      <SideText>{insight}</SideText>
    </div>
  )
}
export const Cgpa = ({ isMobile }) => {
  const imgVariants = {
    offscreen: {
      y: -500,
      opacity: 0,
      rotate: 0,
    },
    onscreen: {
      y: 20,
      rotate: 235,
      opacity: 0.5,
      transition: {
        type: 'spring',
        duration: 1.5,
      },
    },
  }
  const imgVariants2 = {
    offscreen: {
      y: 500,
      opacity: 0,
      rotate: 0,
    },
    onscreen: {
      y: 0,
      rotate: 235,
      opacity: 0.5,
      transition: {
        type: 'spring',
        duration: 2,
      },
    },
  }

  return (
    <div
      style={{
        // background:
        //   'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(110,147,165,1) 30%, rgba(93,135,155,1) 70%, rgba(255,255,255,1) 100%)',

        zIndex: 1,
        position: 'relative',
        //backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
        // backgroundColor: '#f6f6f6',
        // backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #f6f6f6 100%)',
        backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #f6f6f6 47%)',
      }}
    >
      <Container maxWidth="lg">
        <HeadText style={{ padding: '2rem 0 0 0' }}>
          CGPA vs. Salary Scatter Plots Across Tiers
        </HeadText>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            rowGap: '3rem',
          }}
        >
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.img
              variants={imgVariants}
              className={styles.decors}
              style={{
                position: 'absolute',
                top: -230,
                left: 40,
                transform: 'rotate(235deg)',

                zIndex: 2,
              }}
              src="/static/images/rec_circle.svg"
            ></motion.img>
          </motion.div>

          <Chart
            img={<CgpaTier1 />}
            tier={1}
            isMobile={isMobile}
            insight="Tier 1 students experience higher salaries as their CGPA increases, highlighting the significance of academic performance in shaping career outcomes."
          />

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.img
              variants={imgVariants2}
              className={styles.decors}
              style={{
                position: 'absolute',
                top: 550,
                right: 40,
                transform: 'rotate(235deg)',

                zIndex: 2,
              }}
              src="/static/images/circles_gradient.svg"
            ></motion.img>
          </motion.div>
          <Chart
            img={<CgpaTier2 />}
            tier={2}
            isMobile={isMobile}
            insight="Tier 2 students demonstrates that CGPA has a role in determining salaries. Higher CGPA values generally correspond to better earning prospects"
          />
          {!isMobile && (
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.img
                variants={imgVariants2}
                className={styles.decors}
                style={{
                  position: 'absolute',
                  top: 1100,
                  left: 40,
                  transform: 'rotate(235deg)',
                  zIndex: 2,
                }}
                src="/static/images/rectangles.svg"
              ></motion.img>
            </motion.div>
          )}

          <Chart
            img={<CgpaTier3 />}
            tier={3}
            isMobile={isMobile}
            insight="Strong CGPA impacts placements despite moderate salaries, highlighting academic influence."
          />
        </div>
      </Container>
    </div>
  )
}

Chart.propTypes = {
  tier: PropTypes.number,
  img: PropTypes.object,
  isMobile: PropTypes.bool,
  insight: PropTypes.string,
}

Cgpa.propTypes = {
  isMobile: PropTypes.bool,
}
