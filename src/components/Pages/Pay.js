// Pay.js
import React, { useState } from 'react';

const Pay = ({ totalAmount, onPaymentComplete }) => {
  // State to track payment method
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  // Function to handle payment method selection
  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  // Function to simulate the payment process
  const handlePayNow = () => {
    if (selectedPaymentMethod === '') {
      alert('Please select a payment method.');
    } else {
      // Simulate payment by setting a timeout
      setTimeout(() => {
        onPaymentComplete();
      }, 2000); // Simulate a 2-second payment process
    }
  };

  return (
    <div>
      <h2>Select Payment Method</h2>
      <div>
        <label>
          <input
            type="radio"
            value="creditCard"
            checked={selectedPaymentMethod === 'creditCard'}
            onChange={handlePaymentMethodChange}
          />
          Credit Card
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="paypal"
            checked={selectedPaymentMethod === 'paypal'}
            onChange={handlePaymentMethodChange}
          />
          PayPal
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="bankTransfer"
            checked={selectedPaymentMethod === 'bankTransfer'}
            onChange={handlePaymentMethodChange}
          />
          Bank Transfer
        </label>
      </div>
      <button onClick={handlePayNow}>Pay Now</button>
    </div>
  );
};

export default Pay;
