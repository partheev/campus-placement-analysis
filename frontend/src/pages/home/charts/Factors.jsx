import { HeadText } from '../../../components/Headtext'
import styles from '../home.module.css'

export const Factors = () => {
  return (
    <div
      style={
        {
          // background:
          //   'radial-gradient(circle, rgba(203,100,115,0.8268557422969187) 0%, rgba(255,255,255,1) 59%)',
        }
      }
    >
      <HeadText>Factors effecting Placements</HeadText>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.factors_chart}>
          <img
            style={{ width: '100%' }}
            src="/static/charts/factors_affect_on.png"
          />
        </div>
      </div>
      <div></div>
    </div>
  )
}
