import React, { useState } from 'react'

const Hoc = (OriginalComponment) => {
  
    function NewComponment(props){
        const[count, SetCount] = useState(0)
        const handleInc=()=>{
            SetCount(count+1)

        }
        return(<OriginalComponment count={count} handleInc={handleInc} {...props}/>)
    }
    return  NewComponment
}

export default Hoc