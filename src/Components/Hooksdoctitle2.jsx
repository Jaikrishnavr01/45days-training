import React, { useState } from 'react'
import UseDocument from './Hooks/UseDocument'

function Hooksdoctitle2() {
    const [count, setCount] = useState(0)
    UseDocument(count)
  return (
    <div>
      <button onClick={() => {setCount(count+1)}}> click here</button>
    </div>
  )
}

export default Hooksdoctitle2
