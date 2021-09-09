import React from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <Link to="/checkout">
            {basket?.length} {basket?.length > 1 ? 'items' : 'item'}
          </Link>
          )
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>

          <div className="payment__items">
            {basket?.map((item) => (
              <CheckoutProduct checkoutProduct={item} />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__details">{/* PAYMENT METHOD */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
