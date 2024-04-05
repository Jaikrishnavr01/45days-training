import React from 'react'

function Hello(props) {
  return (
    <div>
     <h3>hello {props.name} </h3> 
     <h4>your age is {props.age}</h4>
     {props.children}
    </div>
  )
}

export default Hello
