import React, { useEffect, useRef, useState } from 'react'

function Parentdemo1() {
    const[timer, setTimer] = useState(0)

    const intervalRef = useRef()

    useEffect(()=>{
        intervalRef.current = setInterval(() => {
            setTimer(prev => prev+1)
        }, 1000)
        return()=>{
            clearInterval(intervalRef.current)
        }
    })
  return (
    <div>
      Timer ..... {timer}
      <button onClick={() => {
        clearInterval(intervalRef.current)
      }}>stop</button>
    </div>
  )
}

export default Parentdemo1
