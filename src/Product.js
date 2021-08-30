import React from 'react';
import './Product.css';
import StarRatings from 'react-star-ratings';
import { useStateValue } from './StateProvider';

function Product({ product }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: product,
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{product?.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{product?.price}</strong>
        </p>
        <div className="product__rating">
          <StarRatings
            rating={product?.rating}
            starRatedColor="#f0c14b"
            noOfStars={5}
            starDimension="1.1rem"
            starSpacing="0rem"
            name="rating"
          />
        </div>
      </div>
      <img
        className="product__image"
        src={product?.image}
        alt={product?.title}
      />
      <button className="product__button" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
