import React, { useState, useEffect } from 'react';
import './Orders.css';
import { useStateValue } from './StateProvider';
import axios from './axios';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [{ user, basket }, dispatch] = useStateValue();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/orders');
      if (response.status === 200) {
        setOrders(response.data.data);
      } else {
        setError(response.data.message);
      }
    }
    fetchData();
  }, []);

  console.log(orders);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      {orders?.map((order) => (
        <Order order={order} />
      ))}
    </div>
  );
}

export default Orders;
