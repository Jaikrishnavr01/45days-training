import React from 'react'
import PropsMethod from './PropsMethod'

const Event = () => {
    function abc(a){
        console.log(a)
        debugger
    }
  return (
  
    <div>
      <PropsMethod fn={abc}/>
    </div>
  )
}

export default Event
