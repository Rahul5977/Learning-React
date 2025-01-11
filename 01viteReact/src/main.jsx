import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherElement=(
  <a href="https://www.google.co.in/" target='_blank'> Visit Google</a>
)
function myApp(){
  return(
    <h1>myApp-can render like this also</h1>
  )
}
createRoot(document.getElementById('root')).render(

  //myApp()
  <App/>
)
