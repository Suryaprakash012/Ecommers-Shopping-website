// Cart.js
import React, { useState } from 'react';
import './Styles/Card.css'; // Import the CSS file



const Cart = ({ cartItems, removeFromCart }) => {
  // Calculate the total amount

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  // State to track whether payment is successful
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  // Function to simulate the payment process
  const handlePay = () => {
    // Simulate payment by setting a timeout
    setTimeout(() => {
      setIsPaymentSuccessful(true);
    }, 2000); // Simulate a 2-second payment process
  };

 

 



  return (
    <div className="cart-container">
      <h2 className="cart-header">Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li className="cart-item" key={item.id}>
            {item.name} - ${item.price}
            
            <button
              className="remove-button"
              onClick={() => removeFromCart(item)}
            >
              Remove
            </button>
            
          </li>
        ))}
      </ul>
      <p className="total-amount">Total Amount: ${totalAmount.toFixed(2)}</p>
      
      {isPaymentSuccessful ? (
        <p className="payment-success">Payment successful!</p>
      ) : (
        <button className="pay-button" onClick={handlePay}>
          Pay Now
        </button>
        
      )}
      
      
    </div>
    
  );
};

export default Cart;
