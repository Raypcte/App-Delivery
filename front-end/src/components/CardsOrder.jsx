import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosIstance';

function OrdersCards() {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState();

  const getUser = () => {
    const userInfo = JSON.parse(localStorage.getItem('User'));
    setUser(userInfo);
  };

  const getOrders = useCallback(() => {
    axios.get(`orders/${user.id}`).then((response) => {
      setOrders(response.data);
    }).catch((err) => setError({ error: err }));
  }, [setOrders, user]);

  useEffect(() => {
    getUser();
    getOrders();
  });

  return (
    <div>
      {
        orders.map((item) => (
          <tr key={ item.id }>
            <td
              data-testid={ `customer_orders__element-order-id-${item.id}` }
            >
              {item.id}
            </td>
            <td
              data-testid={ `customer_orders__element-delivery-status-${item.id}` }
            >
              {item.status}
            </td>
            <td
              data-testid={ `customer_orders__element-order-date-${item.id}` }
            >
              {item.date}
            </td>
            <td
              data-testid={ `customer_orders__element-card-price-${item.id}` }
            >
              {item.price}
            </td>
          </tr>
        ))
      }
    </div>
  );
}

export default OrdersCards;
