import React, { useRef, useState } from 'react';

function Task8() {
  const [cartItems, setCartItems] = useState([]);
  const product1Ref = useRef(null);
  const product2Ref = useRef(null);

  const handleAddToCart = (product) => {
    const existingIndex = cartItems.findIndex(item => item.name === product.name);
    const updatedCart = [...cartItems];
    if (existingIndex !== -1) {
      updatedCart[existingIndex].quantity++;
    } else {
      updatedCart.push({ name: product.name, quantity: 1 });
    }
    setCartItems(updatedCart);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const handleDecrementQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
      setCartItems(updatedCart);
    }
  };

  return (
    <div>
      <h2>Cart Page</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
            <button onClick={() => handleDecrementQuantity(index)}>Decrement</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddToCart({ name: 'product1' })} ref={product1Ref}>
        Add product1
      </button>
      <button onClick={() => handleAddToCart({ name: 'product2' })} ref={product2Ref}>
        Add product2
      </button>
    </div>
  );
}

export default Task8;
