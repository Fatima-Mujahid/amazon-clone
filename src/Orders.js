import React, { useState, useEffect } from 'react';
import './Orders.css';
import Order from './Order';
import { useStateValue } from './StateProvider';
import axios from './axios';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    async function fetchData() {
      if (user) {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        };
        const response = await axios.get('/orders', config);
        if (response.status === 200) {
          setOrders(response.data.data);
        } else {
          setError(response.data.message);
        }
      } else {
        setOrders([]);
      }
    }
    fetchData();
  }, [user]);

  return (
    <div className="orders">
      <h1 className="orders__title">Your Orders</h1>

      {orders?.map((order) => (
        <Order order={order} />
      ))}
    </div>
  );
}

export default Orders;
