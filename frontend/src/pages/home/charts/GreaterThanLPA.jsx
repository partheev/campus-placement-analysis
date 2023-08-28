import { Container } from '@mui/material'
import styles from '../home.module.css'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { HeadText } from '../../../components/Headtext'
import { SideText } from '../../../components/SideText'

const Chart = ({ img, sal }) => {
  return (
    <div>
      <motion.div
        // initial={{ opacity: 0.5, scale: 0.91 }}
        // whileInView={{ opacity: 1, scale: 1 }}
        // transition={{
        //   duration: 0.8,
        //   delay: 0.5,
        //   ease: [0, 0.71, 0.2, 1.01],
        // }}
        className={styles.greater_chart}
      >
        <h3 style={{ textAlign: 'center' }}> &gt; {sal} LPA</h3>
        <img style={{ width: '100%' }} src={img} />
      </motion.div>
    </div>
  )
}

export const GreaterThanLPA = () => {
  return (
    <div
      style={{
        margin: '100px 0',
        height: 'fit-content',
        maxHeight: '100vh',
        background:
          'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(205,175,226,0.9669117647058824) 50%, rgba(255,255,255,1) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <HeadText>Tier-based Student Earnings Patterns</HeadText>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <Chart img="/static/charts/salaray_10lpa.png" sal={10} />
          <Chart img="/static/charts/salaray_20lpa.png" sal={20} />
        </div>
        <SideText>
          Tier 1 and Tier 2 students often earn 20 lakhs per annum, with more
          overall above 10 lakhs per annum, while Tier 3 students are less seen
          in both brackets.
        </SideText>
      </Container>
    </div>
  )
}

Chart.propTypes = {
  sal: PropTypes.number,
  img: PropTypes.string,
}
