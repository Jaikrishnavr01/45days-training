import React, { useMemo, useState } from 'react'

function Parent1() {

    const[count1, setCount1] = useState(0)
    const[count2, setCount2] = useState(0)

    const isEvent = useMemo(()=> {
        let i = 0
        while(i<2000000000){i++}
        return count1%2 === 0  
    },[count1])

  return (
    <div>
      {isEvent? 'Event':'Odd'}
      <button onClick={()=> setCount1(count1+1)}> count  {count1}</button>
      <button onClick={()=> setCount2(count2+1)}> count  {count2}</button>
    </div>
  )
}

export default Parent1
