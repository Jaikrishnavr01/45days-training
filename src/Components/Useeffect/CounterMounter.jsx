import React, { useEffect, useState } from 'react'

const CounterMounter = () => {
    const  [count, setCount] = useState(0);
    
    useEffect( ()=>{
        console.log('component mount');
    })

  return (
    <div>
      <h1>hello MR.y </h1>
      <button onClick={() => setCount(count+1)}>count</button>
    </div>
  )
}

export default CounterMounter
