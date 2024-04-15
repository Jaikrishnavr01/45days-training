import React, { useReducer } from 'react'

export default function Reducer() {
    const initialState = 0 
    const Reducer = (state, action) => {
        switch(action){
            case 'increment' : return state+1
            case 'decrement' : return state-1
            case 'reset' : return initialState
            default: return state

        }
    }
    const[count , dispatch] = useReducer(Reducer, initialState)
  return (
    <div>
      {count}
      <br />
      <button onClick={()=> dispatch('increment')}>Increment</button>
      <button onClick={()=> dispatch('decrement')}>Decrement</button>
      <button onClick={()=> dispatch('reset')}>Reset</button>
    </div>
  )
}
