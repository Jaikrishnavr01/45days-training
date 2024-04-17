import React, { useEffect, useState } from 'react'
import './LoaderAnimation.css'
export default function LoaderAnimation() {
    const[duration, setDuration] = useState(0)
    const[second, setSeconds] = useState(0)
    const[isRunning, setIsRunning] = useState(false)
    const[isTimer, setIsTimer] = useState(false)

    const handleChange = (e) => {
        setDuration(e.target.value)
        setSeconds(e.target.value)
    }

    useEffect(()=>{
        let interval
        if(isRunning && second > 0){
            interval = setInterval(()=>{
                setSeconds(prev => prev-1)
            },1000)
        } else if(second === 0 && isRunning) {
            setIsTimer(true)
            setIsRunning(false)
        }
        return()=>{
            clearInterval(interval)
        }
    },[isRunning,second])

    const progressWidth = (second/duration)*100

  return (
    <div>
      {isTimer ? (<h1 className='greeting'> Happy Birthday! </h1>):(
      <div className='message'>
        <p  className='greeting'>counter: {second} in seconds</p>
       <div className='container'>
            <div className='progressbar' style={{width:progressWidth+'%'}}>        

            </div>

        </div>
        </div>
      )}

      <input type='number' value={duration} onChange={handleChange} disabled={isRunning}/>
<div className='btn-cls'>
      {isRunning ? <button onClick={()=> {setIsRunning(false)}}>Stop</button>: <button className='btn-1' onClick={()=> {setIsRunning(true)}}>start</button>}

      <button className='btn-2' onClick={() => {setSeconds(duration); setIsTimer(false)}}>Reset</button>
</div>
    </div>
  )
}
