import React from 'react'
import { useLocation } from 'react-router-dom'
import AppRouter from './routes/AppRouter'

function App() {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return <AppRouter />
}

export default App
