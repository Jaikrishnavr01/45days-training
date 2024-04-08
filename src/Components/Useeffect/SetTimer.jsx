import React, { useEffect, useState } from 'react'

function SetTimer01() {
    const[count, setCount1] = useState(0);
  
    useEffect(()=>{
        const timeout = setTimeout(() => {
            setCount1(prev => prev+1)
        },500)
        return ()=>{
            clearTimeout(timeout) 
        }
    })

  return (
    <div>
      {count}
    </div>
  )
}

export default SetTimer01
