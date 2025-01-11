import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-500 text-black p-4 rounded-xl md:m-4'>Tailwind test</h1>
    <Card/>
    <Card/>

    
        
    
    
    </>
  )
}

export default App
