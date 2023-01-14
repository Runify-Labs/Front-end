import Login from './Login'
import Home from './Home'

const code = new URLSearchParams(window.location.search).get('code')

const App = () => {
  
  document.body.style.backgroundColor = '#DFBE99'
  return (
    <div className='max-w-4xl mx-auto'>
      {code ? <Home code={code}/> : <Login />}
    </div>
  )
}

export default App
