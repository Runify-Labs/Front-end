import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './Login'
import Home from './Home'

const code = new URLSearchParams(window.location.search).get('code')

const App = () => {
  
  return (
    <div className="App">
      {code ? <Home code={code}/> : <Login />}
    </div>
  )
}

export default App
