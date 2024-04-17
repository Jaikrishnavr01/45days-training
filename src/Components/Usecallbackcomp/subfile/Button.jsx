import React from 'react'

 function Button(props) {
    console.log(`Button from ${props.name}`);
  return (
    <div>
      <button onClick={props.handleclick}>click here</button>
    </div>
  )
}

export default React.memo(Button)