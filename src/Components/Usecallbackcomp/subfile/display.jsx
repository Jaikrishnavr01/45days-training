import React from 'react'

function display(props) {
    console.log(`hello from ${props.name}`);
  return (
    <div>
      {props.name} --- {props.display}
    </div>
  )
}

export default React.memo(display)


