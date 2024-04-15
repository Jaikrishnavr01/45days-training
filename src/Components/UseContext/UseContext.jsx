import React, { useContext } from 'react'

export default function UseContext() {
    const user = useContext(useContext)
    const password = useContext(useContext)
  return (
    <div>
      {user.name} in context.js and your age is{user.age}
      {password}
    </div>
  )
}
