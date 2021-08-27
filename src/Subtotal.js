import React from 'react';
import './Subtotal.css';
import NumberFormat from 'react-number-format';

function Subtotal() {
  return (
    <div className="subtotal">
      <NumberFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input className="subtotal__checkbox" type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button className="subtotal__button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
