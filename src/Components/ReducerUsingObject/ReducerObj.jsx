import React, { useReducer } from 'react'

export default function ReducerObj() {
    const initialState = {
firstCounter:0,
secondCounter:0,
    }

    const reducer = (state, action) => {
        switch(action){
            case 'inc': return {...state, firstCounter:state.firstCounter+1}
            case 'dec': return {...state, firstCounter:state.firstCounter-1}
            case 'inc5': return {...state, secondCounter:state.secondCounter+5}
            case 'dec5': return {...state, secondCounter:state.secondCounter-5}
            case 'reset': return initialState
            case 'return': return state
        }
    }
    const[count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <p> count: {count.firstCounter} </p>
    <button onClick={()=>dispatch('inc')}>Inc</button>
    <button onClick={()=>dispatch('dec')}>dec</button>

    {count.secondCounter}
    <button onClick={()=>dispatch('inc5')}>Inc5</button>
    <button onClick={()=>dispatch('dec5')}>dec5</button>

    <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}
