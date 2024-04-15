import React, { useContext } from 'react';
import { PasswordContext, userContext } from '../../App';


export default function UseContext01() {
    const user = useContext(userContext)
    const password = useContext(PasswordContext)
  return (
    <div>
      {user.name} in context.js and your age is{user.age}
      {password}
    </div>
  )
}
