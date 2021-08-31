import React from 'react';
import './CheckoutProduct.css';
import StarRatings from 'react-star-ratings';

function CheckoutProduct({ checkoutProduct }) {
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        src={checkoutProduct?.image}
        alt={checkoutProduct?.title}
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{checkoutProduct?.title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{checkoutProduct?.price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          <StarRatings
            rating={checkoutProduct?.rating}
            starRatedColor="#f0c14b"
            noOfStars={5}
            starDimension="1.1rem"
            starSpacing="0rem"
            name="rating"
          />
        </div>

        <button className="checkoutProduct__button">Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
