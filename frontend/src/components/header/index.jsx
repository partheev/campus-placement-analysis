import { useEffect, useState } from 'react'
import DesktopView from './DesktopView'
import MobileView from './MobileView'
import { Home } from '../../pages/home'
import PropTypes from 'prop-types'

const PAGES = [
  {
    name: 'Campus Analyzer',
    path: '/campus-placement-analyzer',
  },
  {
    name: 'Student Placement Analyzer',
    path: '/student-placement-analyzer',
  },
]
export const Header = ({ isMobile }) => {
  const [navScrolled, setnavScrolled] = useState(false)

  const handleScroll = () => {
    window.scrollY >= 10 ? setnavScrolled(true) : setnavScrolled(false)
  }
  // create an event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  return (
    <>
      <div
        style={
          navScrolled
            ? {
                position: 'sticky',
                zIndex: 5,
                top: 0,
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
              }
            : {
                position: 'sticky',
                zIndex: 5,
                top: 0,
                backgroundColor: 'transparent',
                color: '#fff',
              }
        }
      >
        {!isMobile ? <DesktopView /> : <MobileView />}
      </div>
      <Home isMobile={isMobile} />
    </>
  )
}

Header.propTypes = {
  isMobile: PropTypes.bool,
}
