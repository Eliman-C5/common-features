import { CounterApp } from './components/counterApp/CounterApp'
import './index.css'

function App() {

  return (
    <div className="App">
      <h1 className='title'>Common Features</h1>
      <hr />
      
      <h2 className='subtitles'>First Feature: CounterApp (useReducer)</h2>
      <CounterApp />
      
    </div>
  )
}

export default App
