import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  // cpy pass ->
  const copyPass = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password)},[Password])

  // useRef ->
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*-_+~`"

    for(let i=0;i<length;i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{ passwordGenerator() },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md bg-gray-800 my-8 mx-auto py-4 px-5 shadow-md rounded-xl text-white text-xl'>
        <h1 className='uppercase text-white text-2xl text-center '>Password Generator</h1>
        {/* for the input  */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={Password} className='my-3 outline-none w-full py-1 px-3 rounded-md bg-gray-950' placeholder='password' readOnly style={{backgroundColor:'black'}} ref={passwordRef} />

          {/* for the button */}
          <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 w-full' onClick={copyPass}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          {/* for the range */}
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={16} value={length} className='cursor-pointer ' onChange={(e)=>{setLength(e.target.value)}} />
            <label htmlFor="">Length : {length}</label>
          </div>

          {/* for the Numbers */}
          <div className='flex items-center gap-x-1' >
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{setNumberAllowed((prev)=> !prev);}} />
            <label htmlFor="numberInpur">Numbers</label>
          </div>

          {/* for the Special symbol */}
          <div className='flex items-center gap-x-1' >
            <input type="checkbox" defaultChecked={charAllowed} id='charInpur' onChange={()=>{setCharAllowed ((prev)=> !prev);}} />
            <label htmlFor="numberInpur">Special Char.</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
