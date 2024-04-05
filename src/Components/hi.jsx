import React, { Children } from 'react'

const Cello = ({name, age, children}) => {
// const {name, age, children} = props;

  return (
    <div>
      {name} is {age}

{children}
    </div>
  )
}

export default Cello
