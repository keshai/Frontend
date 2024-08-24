import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")


  return (

      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        
       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl' >
              <button id='red' className='rounded-2xl px-2 py-1' style={{backgroundColor: "red"}} onClick={()=> setColor("red")}>Red</button>
              <button id='green' className='rounded-2xl px-2 py-1' style={{backgroundColor: "green"}} onClick={()=> setColor("green")}>Green</button>
              <button id='blue' className='rounded-2xl px-2 py-1' style={{backgroundColor: "blue"}} onClick={()=> setColor("blue")} >Blue</button>
          </div>
       </div>
      </div>
  )
}

export default App
