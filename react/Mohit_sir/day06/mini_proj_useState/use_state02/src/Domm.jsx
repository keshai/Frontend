import React, { useState } from "react";

function Domm() {
  const [val, setVal] = useState('');
  const [btndata, setbtndata] = useState('');

  function print(e) {
    setVal(e.target.value) 
    
  }

  function btn() {
     setbtndata(val)
  }

  return (
    <div className="container">
      <input type="text" onChange={print} />
      <button onClick={btn}>Print</button>
      <h1>{btndata}</h1>
    </div>
  );
}

export default Domm;
