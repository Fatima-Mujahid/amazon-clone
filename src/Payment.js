import React, { useState } from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import NumberFormat from 'react-number-format';
import ReactDOM from 'react-dom';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

function Payment() {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);
  const [{ user, basket }, dispatch] = useStateValue();
  const history = useHistory();

  const createOrder = (data, actions) => {
    return actions.order.create({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            value: getBasketTotal(basket),
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    setPaid(true);
    console.log(order);
  };

  const onError = (error) => {
    setError(error);
  };

  if (paid) {
    dispatch({
      type: 'EMPTY_BASKET',
    });
    history.replace('/orders');
  }

  if (error) {
    console.log(error);
  }

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

          <div className="payment__details">
            <NumberFormat
              renderText={(value) => <h3>Order Total: {value}</h3>}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
            <PayPalButton
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
              onError={(error) => onError(error)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
