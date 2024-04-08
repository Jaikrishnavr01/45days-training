import React, { useState } from 'react'
import CounterMountAndUnMount from './CounterMountAndUnMount';

const Toggle = () => {
    const[toggle, setToggle] = useState(true);
  return (
    <div>
      <button onClick={()=> {setToggle(!toggle)}}> toggle</button>
      {toggle && <CounterMountAndUnMount/>}
    </div>
  )
}

export default Toggle
