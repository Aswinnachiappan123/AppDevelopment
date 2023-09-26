// CartPage.jsx

import React, { useState } from 'react';
import '../assets/css/CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Trainer 1',
      price: 2000,
      
    },
    {
      id: 2,
      title: 'Trainer 2',
      price: 1500,
      
    },
    {
      id: 3,
      title: 'Trainer 3',
      price: 2500,
      
    },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart-page">
      <h1>Trainers</h1>
      <div className="cart-container">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-image">
              <img
                src={`https://images.pexels.com/photos/17204477/pexels-photo-17204477/free-photo-of-model-in-jacket-and-trainers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1${item.title}`} // Replace with actual book cover image URL
                alt={item.title}
              />
            </div>
            <div className="item-details">
              <h3 className="item-title">{item.title}</h3>
              <p className="item-price">${item.price.toFixed(2)}</p>
              <div className="quantity">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
