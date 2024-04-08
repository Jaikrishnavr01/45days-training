import React, { useEffect, useState } from 'react'

const Greeting = () => {
    const[time, SetTime] = useState(new Date())
    const[val, setVal] = useState('')

    useEffect(() => {
        const interval = setInterval(()=>{
            SetTime(new Date())
        },1000)
        return() => {
            clearInterval(interval)
        }
    },[])

    useEffect(()=>{
        const timeString= time.toLocaleTimeString()
        if(timeString === "12:02:00 AM"){
            setVal("hello jai")
        }
        //To set null
        if(timeString === "12:02:10 AM"){
            setVal("")
        }
       
    })
  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
      <h2>{val}</h2>
    </div>
  )
}

export default Greeting
