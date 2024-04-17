import React, { useReducer, useRef } from 'react';

export default function Task8() {
  const product1Ref = useRef(0);
  const product2Ref = useRef(0);

  const Reducer = (state, action) => {
    switch (action.type) {
      case 'product1':
        return { ...state, product1: state.product1 + 1, showProduct1: true };
      case 'product1dec':
        return { ...state, product1: state.product1 > 1 ? state.product1 - 1 : 1 };
      case 'product2':
        return { ...state, product2: state.product2 + 1, showProduct2: true };
      case 'product2dec':
        return { ...state, product2: state.product2 > 1 ? state.product2 - 1 : 1 };
      case 'produ1remove':
        return { ...state, product1: 0, showProduct1: false };
      case 'produ2remove':
        return { ...state, product2: 0, showProduct2: false };
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(Reducer, {
    product1: product1Ref.current,
    product2: product2Ref.current,
  });

  return (
    <div>
      {count.showProduct1 && (
        <p>
          product1: {count.product1}
          <span>
            <button onClick={() => dispatch({ type: 'product1dec' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'produ1remove' })}>Remove</button>
          </span>
        </p>
      )}
      {count.showProduct2 && (
        <p>
          product2: {count.product2}
          <span>
            <button onClick={() => dispatch({ type: 'product2dec' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'produ2remove' })}>Remove</button>
          </span>
        </p>
      )}

      <button onClick={() => dispatch({ type: 'product1' })}>add product1</button>
      
      <button onClick={() => dispatch({ type: 'product2' })}>add product2</button>
    </div>
  );
}
