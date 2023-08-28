import { Container } from '@mui/material'
import styles from '../home.module.css'
import PropTypes from 'prop-types'
import { HeadText } from '../../../components/Headtext'
import { SideText } from '../../../components/SideText'

const Chart = ({ img, tier }) => {
  return (
    <div>
      <div className={styles.distribution_chart}>
        <h3
          style={{ textAlign: 'center', fontFamily: 'var(--font-secondary)' }}
        >
          TIER {tier}
        </h3>
        <img className={styles.distribution_chart_img} src={img} />
        <div
          style={{
            textAlign: 'center',
            marginBottom: '0',
            fontFamily: 'Courier New',
          }}
        >
          LPA
        </div>
      </div>
    </div>
  )
}

export const DistributionOfSalary = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //   background: rgb(255,255,255);
        background:
          'linear-gradient(0deg, rgba(255,255,255,1) 1%, rgba(209,168,210,1) 50%, rgba(255,255,255,1) 100%)',
        // background:
        //   'linear-gradient(51deg, rgba(19,43,89,1) 1%, rgba(19,43,89,1) 2%, rgba(83,133,157,1) 33%, rgba(153,101,173,1) 47%, rgba(153,101,173,1) 62%, rgba(133,65,205,1) 87%, rgba(95,33,196,1) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <HeadText style={{ marginBottom: '5rem' }}>
          A Comparative Analysis on Tier-wise Student Salary Distribution{' '}
        </HeadText>

        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          <Chart img="/static/charts/distribution_tier1_mobile.png" tier={1} />
          <Chart img="/static/charts/distribution_tier2_mobile.png" tier={2} />
          <Chart img="/static/charts/distribution_tier3_mobile.png" tier={3} />
        </div>
        <SideText>
          In the tier spectrum, Tier 1 and 2 favor mid-range salaries, while
          Tier 3 leans to lower pay, reflecting diverse student package
          acquisition.
        </SideText>
      </Container>
    </div>
  )
}

Chart.propTypes = {
  tier: PropTypes.number,
  img: PropTypes.string,
}
