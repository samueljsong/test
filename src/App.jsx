import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"
import { Login } from './pages/Login'
import { Landing } from './pages/Landing'

import Cookies from 'universal-cookie'

function App() {
  const cookies = new Cookies();
  

  function onLoginSetSessionID(sessionID) {
    setSessionID(sessionID);
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Login cookies={cookies}/>}/>
        <Route path='/landing' element={<Landing cookies={cookies}/>}/>
      </Routes>
    </>
  )
}

export default App
