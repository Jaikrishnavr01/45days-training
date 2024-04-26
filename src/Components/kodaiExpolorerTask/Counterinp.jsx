import React, { useState } from 'react'
import { useEffect } from 'react'


export default function Counterinp() {

  const [count ,SetCount] = useState(0)
  const[prevCount , SetPrevCount] = useState()
  const [isRunning, SetIsRunning] = useState()

  useEffect(()=>{
    let timer;
 if(isRunning && count>0){
   
   timer = setInterval(()=> {
     SetCount(prev => prev-1)
   }, 1000)
  }
  return ()=> clearInterval(timer)
}, [isRunning, count])

    function handleinput(e){
        const inputvalue = Number(e.target.value)
        SetCount(inputvalue)
        SetPrevCount(inputvalue)
    }

    function Reset(){
      SetCount(prevCount)
      SetIsRunning(false); 
    };
    
    function toggle(){
      SetIsRunning(!isRunning)
    }    

  return (
    <div>
      {count}
      {count === 0 && <h1>Happy birthday</h1>}
        <input type='text' onChange={handleinput}/>
        <button onClick={toggle}>{isRunning?"Stop":"Start"}</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}
