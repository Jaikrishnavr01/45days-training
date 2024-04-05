import React, { useState } from 'react'

const Task1 = () => {
    const [count , setCount] = useState(0)
    
    function inc(){
        if(count<10){
            setCount(count+1)
        }
    }
    function dec(){
        if(0<count){
            setCount(count-1)
        }
    }
     function reset(){
        setCount(0)
     }


  return (
    <div>
<h1>Count - {count}</h1>
<button onClick={inc}>inc</button>
<button onClick={dec}>dec</button>
<button onClick={reset}>reset</button>
      
    </div>
  )
}

export default Task1


