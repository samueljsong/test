import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [message, setMessage] = useState('nothing');

  useEffect(() => {
    fetch('https://comp4921test.netlify.app/.netlify/functions/api')
      .then(data => data.json())
      .then(json => setMessage(json.hello))
  }, [])

  return (
    <>
      <h1>MESSAGE</h1>
      {message}
    </>
  )
}

export default App
