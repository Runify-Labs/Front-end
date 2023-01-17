import Login from './Login'
import Home from './Home'
import { sampleSearchResults } from './sample_data/sample_data.cjs'

const code = new URLSearchParams(window.location.search).get('code')

document.body.style.backgroundColor = '#DFBE99'

const App = () => {
  
  document.body.style.backgroundColor = '#DFBE99'
  return (
    <div className='max-w-4xl mx-auto'>
      {code ? <Home code={code}/> : <Login />}
    </div>
  )
}

export default App
