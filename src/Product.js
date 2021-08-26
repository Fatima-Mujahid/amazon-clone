import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">
          The Lean Startup: How Constant Innovation Creates Radically Successful
          Businesses Paperback
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>11.96</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
        </div>
      </div>
      <img
        className="product__image"
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        alt="Product"
      />
      <button className="product__button">Add to Basket</button>
    </div>
  );
}

export default Product;
