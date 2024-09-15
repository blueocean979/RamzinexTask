
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='linkWrapper'>
      <Link to="/marketslist" >Click to see list of markets</Link>
    </div>
  )
}

export default App
