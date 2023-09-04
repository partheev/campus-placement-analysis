import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const AppContext = createContext({
  isMobile: false,
})

export const AppContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    window.innerWidth < 540 ? setIsMobile(true) : setIsMobile(false)
  }

  // create an event listener
  useEffect(() => {
    window.innerWidth <= 540 ? setIsMobile(true) : setIsMobile(false)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <AppContext.Provider value={{ isMobile }}>{children}</AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.any,
}
