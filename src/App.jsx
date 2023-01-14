import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './Login'
import Home from './Home'

const code = new URLSearchParams(window.location.search).get('code')

document.body.style.backgroundColor = '#DFBE99'

const App = () => {
  
  return (
    <div className='max-w-4xl mx-auto'>
      {code ? <Home code={code}/> : <Login />}
    </div>
  )
}

export default App
