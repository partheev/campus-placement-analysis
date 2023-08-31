import { useContext, useEffect, useState } from 'react'
import DesktopView from './DesktopView'
import MobileView from './MobileView'
import PropTypes from 'prop-types'

import { PAGE_PATHS } from '../../constants/PagePaths'
import { AppContext } from '../../contexts/AppContext'

const NAV_PAGES = [
  {
    name: 'Placement Insights',
    path: PAGE_PATHS.INSIGHTS,
  },
  {
    name: 'Campus Analyzer',
    path: PAGE_PATHS.CAMPUS_PLACEMENT_ANALYZER,
  },
  {
    name: 'Student Placement Analyzer',
    path: PAGE_PATHS.STUDENT_PLACEMENT_ANALYZER,
  },
]

export const Header = () => {
  const { isMobile } = useContext(AppContext)
  const [navScrolled, setnavScrolled] = useState(false)

  const handleScroll = () => {
    window.scrollY >= 10 ? setnavScrolled(true) : setnavScrolled(false)
  }
  // create an event listener
  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
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
        {!isMobile ? (
          <DesktopView NAV_PAGES={NAV_PAGES} />
        ) : (
          <MobileView NAV_PAGES={NAV_PAGES} />
        )}
      </div>
    </>
  )
}

Header.propTypes = {
  isMobile: PropTypes.bool,
}
