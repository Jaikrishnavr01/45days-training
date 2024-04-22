import React from 'react'
import ReactDOM from 'react-dom'

function Portal() {
  return ReactDOM.createPortal(
    <div>
      <h1>Hello word</h1>
    </div>, document.getElementById('Portal')
  )
}

export default Portal
