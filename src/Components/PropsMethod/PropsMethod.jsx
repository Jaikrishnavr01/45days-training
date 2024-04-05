import React from 'react'

const PropsMethod = (props) => {
  return (
    <div>
      <button onClick={() => props.fn("jeo")}>button click</button>
    </div>
  )
}

export default PropsMethod
