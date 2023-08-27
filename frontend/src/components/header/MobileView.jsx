import { useState } from 'react'
import Menu from './Menu'
import { motion } from 'framer-motion'

const MobileView = () => {
  const [isOpen, setisOpen] = useState(false)

  const menuVariant = {
    offscreen: {
      y: -140,
      opacity: 0.2,
    },
    onscreen: {
      y: 0,

      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
  }
  return (
    <div>
      <div
        style={{
          height: '60.737px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {' '}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '80%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>logo</div>
          <div onClick={() => setisOpen(!isOpen)}>
            <Menu />
          </div>
        </div>
      </div>
      {isOpen ? (
        <motion.div initial="offscreen" whileInView="onscreen" style={{}}>
          <motion.div
            style={{
              width: '80%',
              margin: '0 auto',
              background: '#fff',
              padding: '5px',
            }}
            variants={menuVariant}
          >
            <div
              style={{
                fontSize: '1rem',
                fontFamily: 'var(--font-secondary)',
                fontWeight: '500',
                lineHeight: '1.5',
                cursor: 'pointer',

                color: 'black',
              }}
            >
              Insights
            </div>
            <div
              style={{
                width: '100%',
                height: '1px',
                margin: '10px auto',
                backgroundColor: '#ccc',
              }}
            ></div>
            <div
              style={{
                fontSize: '1rem',
                fontFamily: 'var(--font-secondary)',
                fontWeight: '500',
                lineHeight: '1.5',
                cursor: 'pointer',

                color: 'black',
              }}
            >
              Campus analysis
            </div>
            <div
              style={{
                width: '100%',
                height: '1px',
                margin: '10px auto',
                backgroundColor: '#ccc',
              }}
            ></div>
            <div
              style={{
                fontSize: '1rem',
                fontFamily: 'var(--font-secondary)',
                fontWeight: '500',
                lineHeight: '1.5',
                cursor: 'pointer',
                color: 'black',
              }}
            >
              Placement prediction
            </div>
            <div
              style={{
                width: '100%',
                height: '1px',
                margin: '5px auto',
              }}
            ></div>
          </motion.div>
        </motion.div>
      ) : null}
    </div>
  )
}

export default MobileView
