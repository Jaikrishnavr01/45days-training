import React from 'react'
import Hoc from '../Hoc'

const Counter01 = (props) => {
  return (
    <div>
        {props.name}
        <button onClick={props.handleInc}>{props.count}</button>
    </div>
  )
}

export default Hoc(Counter01)