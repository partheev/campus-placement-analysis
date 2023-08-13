import { useEffect, useState } from 'react'
import DesktopView from './DesktopView'
import MobileView from './MobileView'

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
export const Header = () => {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })
  return <>{!isMobile ? <DesktopView /> : <MobileView />}</>
}
