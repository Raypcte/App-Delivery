import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosIstance';

function OrdersCards() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const getOrders = useCallback(async () => {
    const userInfo = JSON.parse(localStorage.getItem('User'));

    await axios.get(`orders/${userInfo.id}`).then((response) => {
      setOrders(response.data);
    });
    console.log(orders);
  }, [orders]);

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      {
        orders.map((item) => (
          <button
            key={ item.id }
            onClick={ navigate(`/customer/orders/${item.id}`) }
            type="button"
          >
            <table>
              <tbody>
                <tr>
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
                    { item.saleDate }
                  </td>
                  <td
                    data-testid={ `customer_orders__element-card-price-${item.id}` }
                  >
                    {item.totalPrice}
                  </td>
                </tr>
              </tbody>
            </table>
          </button>
        ))
      }
    </>
  );
}

export default OrdersCards;
