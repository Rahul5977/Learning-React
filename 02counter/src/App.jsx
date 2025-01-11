import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  const addValue = () => {
    counter++
    if (counter > 20) return
    setCounter(counter)
    console.log("Clicked", counter);
  }
  const removeValue = () => {
    counter--
    if (counter < 0) return
    setCounter(counter)
    console.log("Clicked", counter);
  }
  return (
    <>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button><br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
