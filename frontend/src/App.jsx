import { useEffect, useState } from 'react'
import { Header } from './components/header'

function App() {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    window.innerWidth < 460 ? setIsMobile(true) : setIsMobile(false)
  }

  // create an event listener
  useEffect(() => {
    window.innerWidth <= 460 ? setIsMobile(true) : setIsMobile(false)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <Header isMobile={isMobile} />
    </>
  )
}

export default App
