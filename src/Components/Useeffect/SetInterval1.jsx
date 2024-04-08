import React, { useEffect, useState } from 'react'

function SetInterval1() {
    const[count, setCount1] = useState(0);
    const[intervalid,  setIntervalid] = useState()
  
    useEffect(()=>{
        const interval = setInterval(() => {
            setCount1(prev => prev+1)
        },1000)

        setIntervalid(interval)
        return ()=>{
            clearInterval(intervalid) 
        }
    }, [])

  return (
    <div>
      {count}
<br />
      <button onClick={()=> {clearInterval(intervalid)}}>Stop da</button>
    </div>
  )
}

export default SetInterval1

