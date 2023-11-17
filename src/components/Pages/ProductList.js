// ProductList.js
import React, { useState } from 'react';
import './Styles/Productlist.css'; // Import the CSS file
import ProductList1 from './ProductList1';

const ProductList = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: 'Analog Watch - For Men ',

      price: 10,
      company:'SONATA',
      oldprice:'315252',
      offer:'60%off',
      
      image: '/images/p4.jpeg',
    },
    {
      id: 2,
      name: 'SONY SEL50F18/BC',
      price: 12000,
      company:'SONY',
      oldprice:'16000',
      offer:'20%off',
      image: '/images/p3.jpeg',
        },
    {
      id: 3,
      name: ' CAMARA',
      price: 30000,
      company:'CP PLUS CP-V32G 3MP',
      oldprice:'36000',
      offer:'60%off',
      image: '/images/p2.jpeg',
        },
     {
       id: 4,
          name: 'Jacob Creek Non Alcoholic',
          price: 3000,
          company:'Red Wine ',
          oldprice:'5000',
          offer:'60%off',
          image: '/images/p6.webp',
            },
            {
              id: 5,
              name: 'boAt Airdopes 161',
              price: 3000,
              company:'BOAD',
              oldprice:'4000',
              offer:'25%OFF',
              image: '/images/p8.jpeg',
           },
           {
            id: 6,
            name: ' APPLE iPhone 14 (Blue, 128 GB)',
            price: 120000,
            company:'APPLE',
            oldprice:'150000',
            offer:'20%off',
            image: '/images/p1.jpeg',
              },
              {
              id: 7,
              name: 'APPLE iPhone 15 (Blue, 128 GB) 3',
              price: 130000,
              company:'APPLE',
              oldprice:'150000',
              offer:'30%off',
              image: '/images/p9.jpeg',
                },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className='full'>

        <div className="producthead">
          <div className="saleinfo">

          <div>
            <h2 className='infoh2'>Fashion Sale</h2>
            <h1 className="infoh1">Your Dream's</h1>
          </div>
          
          </div>
        </div>
      <h1></h1>
      <h2>Product List</h2>
      <ul className="product-list">
     

        {products.map((product) => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-namecompany">{product.company}</p>
            <p className="product-name">{product.name}</p>

            <p className="product-priceprice">${product.price} <s></s></p>
            <p className="product-priceoldprice"> <s> ${product.oldprice}</s></p>
            <p className="product-priceoffer">${product.offer}</p>
        
            <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">
              Add to Cart
            </button>
          </li>
        ))}
      </ul><br /><br />
      <div className='productlisthead'>
          
      </div>
      <div>
        <ProductList1/>
      </div>
    </div>
  );
};

export default ProductList;
