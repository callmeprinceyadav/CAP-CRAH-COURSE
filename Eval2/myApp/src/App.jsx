import { useState,Route,Routes } from 'react'
import { AuthProvider } from './context/AuthContext'

import Navbar from './components/Navbar'
import AllRoutes from './components/AllRoutes'

function App() {
  

  return (
    <>
    <AuthProvider>
      <Navbar/>
      <AllRoutes/>

    </AuthProvider>
    </>
  )
}

export default App
