import React, { useEffect, useRef } from 'react'

function Parentdemo() {
    const inputRef = useRef()

    useEffect(() =>  {
        inputRef.current.focus()
    },[])

  return (
    <div>
      <input ref={inputRef} />
    </div>
  )
}

export default Parentdemo
