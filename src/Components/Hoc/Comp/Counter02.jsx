import React from 'react'
import Hoc from '../Hoc'

const Counter02 = (props) => {
  return (
    <div>
        {props.name}
        <h1 onMouseOver={props.handleInc}>{props.count}</h1>
    </div>
  )
}

export default Hoc(Counter02)