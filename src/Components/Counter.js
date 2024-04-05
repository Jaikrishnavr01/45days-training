import React, { useState } from 'react'

const Counter = () => {
    const[count, setCount] = useState(0)

    const changeCount = () =>{
        for(let i=0; i<5; i++){
            setCount(prev => prev+1)
            // setCount(count+1)
            debugger
        }
    }

  return (
    <div>
      count - {count}
      <button onClick={changeCount}>inc</button>
    </div>
  )
}

export default Counter
