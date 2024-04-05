import React, { useState } from 'react'

const Ifelse = () => {

    const[isAdmin , setAdmin] =useState(true)
    if(isAdmin){
        return(
            <div>
                <h1>Welcome admin</h1>
            </div>
        )
    }
    else{
        return(<h1>Welcome User</h1>)
    }
}

export default Ifelse
