// ProductList.js
import React, { useState } from 'react';
import './Styles/Productlist.css'; // Import the CSS file

const ProductList1 = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      name1:'ss',
      image: '/images/p2.jpeg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      image: '/images/p2.jpeg',
        },
    {
      id: 3,
      name: 'Product 3',
      price: 30,
      image: '/images/p2.jpeg',
        },
     {
       id: 4,
          name: 'Product 3',
          price: 30,
          image: '/images/p6.webp',
            },
            {
              id: 5,
              name: 'Product 3',
              price: 30,
              image: '/images/p8.jpeg',
           },
           {
            id: 6,
            name: 'Product 3',
            price: 30,
            image: '/images/p1.jpeg',
              },
              {
              id: 7,
              name: 'Product 3',
              price: 30,
              image: '/images/p9.jpeg',
                },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className='full'>
      <h1>gdfdg</h1>
      <h2>Product List</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-name">{product.name}</p>
            <p className="product-name">{product.name1}</p>

            <p className="product-price">${product.price}</p>
            <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <div>
        
      </div>
    </div>
  );
};

export default ProductList1;
