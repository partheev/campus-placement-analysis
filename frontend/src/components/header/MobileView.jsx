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
          position: 'sticky',
          //   backgroundColor: 'hsla(0, 100%, 100%, 0.9)',
          backgroundColor: '#F6F4EB',
          top: 0,
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
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          style={{
            //   backgroundColor: 'hsla(0, 100%, 100%, 0.9)',
            backgroundColor: '#F6F4EB',
          }}
        >
          <motion.div
            style={{ width: '80%', margin: '0 auto' }}
            variants={menuVariant}
          >
            <div
              style={{
                fontSize: '1rem',
                fontFamily: 'var(--font-secondary)',
                fontWeight: '680',
                color: '#181a1c',
                lineHeight: '1.5',
                cursor: 'pointer',
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
                fontWeight: '680',
                color: '#181a1c',
                lineHeight: '1.5',
                cursor: 'pointer',
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
                fontWeight: '680',
                color: '#181a1c',
                lineHeight: '1.5',
                cursor: 'pointer',
              }}
            >
              Placement prediction
            </div>
            <div
              style={{
                width: '100%',
                height: '1px',
                margin: '10px auto',
              }}
            ></div>
          </motion.div>
        </motion.div>
      ) : null}
    </div>
  )
}

export default MobileView
