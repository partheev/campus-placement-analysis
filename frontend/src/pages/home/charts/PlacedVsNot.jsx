import { Container } from '@mui/material'
import styles from '../home.module.css'
import { HeadText } from '../../../components/Headtext'

export const PlacedVsNot = () => {
  return (
    <div
      style={{
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxHeight: '100vh',
        // background:
        //   'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(227,196,61,0.8408613445378151) 35%, rgba(199,74,77,0.8240546218487395) 65%, rgba(255,255,255,1) 100%)',
        // background:
        //   'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(227,196,61,0.8408613445378151) 40%, rgba(199,74,77,0.8240546218487395) 60%, rgba(255,255,255,1) 100%)',

        // backgroundColor: '#7091F5',
        padding: '4rem 0',
        backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
      }}
    >
      <Container maxWidth="lg">
        <HeadText>Student Percentage of Placed vs Not Placed</HeadText>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={styles.placedvsnot_chart}>
            <img
              style={{ width: '100%' }}
              src="/static/charts/placed_vs_notplaced.png"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
