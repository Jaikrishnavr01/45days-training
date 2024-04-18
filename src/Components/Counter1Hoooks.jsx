import React from 'react'
import UseCounter from './Hooks/UseCounter'

function Counter1Hoooks() {

    const[count, inc,dec,res] = UseCounter(0,1)
  return (
    <div> 
        {count}
        <button onClick={inc}>increment</button>
        <button onClick={dec}>decrement</button>
        <button onClick={res}>reset</button>
      
    </div>
  )
}

export default Counter1Hoooks
