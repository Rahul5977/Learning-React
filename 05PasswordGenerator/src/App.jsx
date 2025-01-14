import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [lenght, setLenght] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNqwertyuiopsdfghjklxcvbnm"
    if (numAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*()_+="
    for (let i = 1; i <=lenght; i++) {
      let idx = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(idx);
    }
    setPassword(pass)
  }, [lenght, numAllowed, charAllowed, setPassword])

  const passwordRef=useRef(null)
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password)
    alert("Copied to clipboard")
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  },[lenght, numAllowed, charAllowed,passwordGenerator])



  return (
    <>
      {/* <h1 className='text-center text-4xl text-white'>Password Generator</h1> */}
      <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-8 my-10 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800">
        <h1 className="text-white text-center text-2xl font-bold mb-6">Password Generator</h1>
        <div className="flex items-center shadow-md rounded-lg overflow-hidden mb-6 bg-gray-900">
          <input
            type="text"
            value={password}
            className="outline-none w-full px-4 py-3 text-white bg-transparent placeholder-gray-400 text-lg"
            placeholder="Generated Password"
            ref={passwordRef}
            readOnly
          />
          <button 
          onClick={copyPasswordToClipboard}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 ease-in-out ml-2 shadow-md">
            Copy
          </button>
        </div>
        <div className="flex items-center text-sm gap-x-4 justify-between flex-nowrap">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={8}
              max={50}
              value={lenght}
              className="cursor-pointer accent-orange-500"
              onChange={(e) => {
                setLenght(e.target.value);
              }}
            />
            <label className="text-gray-300 font-medium">
               ({lenght})
            </label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              className="accent-orange-500 cursor-pointer"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput" className="text-gray-300 font-medium">
              <span className="text-orange-400">Characters</span>
            </label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numAllowed}
              id="numberInput"
              className="accent-orange-500 cursor-pointer"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="text-gray-300 font-medium">
              <span className="text-orange-400">Numbers</span>
            </label>
          </div>
        </div>
      </div>


    </>

  )
}

export default App
