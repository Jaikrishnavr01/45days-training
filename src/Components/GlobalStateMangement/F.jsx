import React, { useContext } from 'react'
import B1 from './B'
import { CounterContext } from '../../App'

export default function F1() {
    const counter= useContext(CounterContext) 
  return (
    <div>
        f
  <button onClick={() => counter.dispatch('inc')}>inc</button>
  <button onClick={() => counter.dispatch('dec')}>dec</button>
  <button onClick={() => counter.dispatch('reset')}>reset</button>
    </div>
  )
}
