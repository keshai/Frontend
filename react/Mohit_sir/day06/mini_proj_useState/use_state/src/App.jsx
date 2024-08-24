import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setcounter] = useState(0)

  function incri(){
      console.log(counter);
      setcounter(counter++)
}
function decri(){
  console.log(counter);
  setcounter( counter--)
}
  return (
    <>
          <div className="box">
            <button className="btn" onClick={decri}>-</button>
            <h2>{counter}</h2>
            <button className="btn" onClick={incri}>+</button>
          </div>
    </>
  )
}

export default App
