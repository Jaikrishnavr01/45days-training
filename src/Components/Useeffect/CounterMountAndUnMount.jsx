import React, { useEffect, useState } from 'react'

export default function CounterMountAndUnMount() {
    const [x, setX]= useState(0) 
    const [y, setY]= useState(0) 

    useEffect( ()=>{
          window.addEventListener('mousemove', logPostion) // mounting phase
        return ()=>{
          window.removeEventListener('mousemove', logPostion) // unmounting phase
        }

    },[])


    const logPostion=(e) =>{
      console.log('mouse is moving');
      setX(e.clientX)
      setY(e.clientY)
    }


    
    
  return (
    <div>
      mouse move x-{x} y-{y}
    </div>
  )
}
