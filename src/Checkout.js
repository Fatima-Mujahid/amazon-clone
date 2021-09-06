import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import FlipMove from 'react-flip-move';
import { v1 as uuidv1 } from 'uuid';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ user, basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Checkout Ad"
          className="checkout__ad"
        />
        <div>
          <h3 className="checkout__username">
            Hello, {user?.email.substring(0, user?.email.lastIndexOf('@'))}
          </h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <FlipMove>
            {basket?.map((item) => (
              <CheckoutProduct checkoutProduct={item} key={uuidv1()} />
            ))}
          </FlipMove>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
