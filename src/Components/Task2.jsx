import React, { useState } from 'react'

const Task2 = (props) => {
    

    const toggle = (                               ) => {
        const x = props.togglebtn === "ON"?  props.setTogglebtn("OFF"):props.setTogglebtn("ON")
    }

  return (
    <div>
      <h1>{props.togglebtn}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
    )
 }

export default Task2
