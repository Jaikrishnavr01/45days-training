import React, { useState } from 'react'

function UseCounter(initialvalue,incvalue) {
const[count, setCount] = useState(initialvalue)
const handleInc=()=> {
    setCount(count + incvalue)
}
const handleDec=()=> {
    setCount(count - incvalue)
}
const handleRes=()=> {
    setCount(initialvalue)
}
return [count,handleInc, handleDec,handleRes]
}

export default UseCounter
