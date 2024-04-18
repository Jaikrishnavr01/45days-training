import React, { useEffect } from 'react'

function UseDocument(count) {
useEffect(()=> {
    document.title = `Document ${count}`
},[count])


}

export default UseDocument
