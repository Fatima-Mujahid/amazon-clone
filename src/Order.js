import React from 'react';
import './Order.css';
import CheckoutProduct from './CheckoutProduct';
import moment from 'moment';
import NumberFormat from 'react-number-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Order({ order }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="order">
      <h2>Order</h2>

      <p className="order__date">
        {moment(order?.date).format('MMMM Do YYYY, h:mma')}
      </p>

      <p className="order__id">
        <small>{order?._id}</small>
      </p>

      {order?.products?.map((product) => (
        <CheckoutProduct checkoutProduct={product} hideButton={true} />
      ))}

      <NumberFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order?.amount}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
}

export default Order;
