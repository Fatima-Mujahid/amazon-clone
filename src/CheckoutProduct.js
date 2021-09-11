import React, { forwardRef } from 'react';
import './CheckoutProduct.css';
import StarRatings from 'react-star-ratings';
import { useStateValue } from './StateProvider';

const CheckoutProduct = forwardRef(({ checkoutProduct, hideButton }, ref) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: checkoutProduct._id,
    });
  };

  return (
    <div className="checkoutProduct" ref={ref}>
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

        {!hideButton && (
          <button
            className="checkoutProduct__button"
            onClick={removeFromBasket}
          >
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
});

export default CheckoutProduct;
