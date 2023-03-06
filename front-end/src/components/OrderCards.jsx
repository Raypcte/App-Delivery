import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosIstance';

function OrdersCards() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const getOrders = useCallback(async () => {
    const userInfo = JSON.parse(localStorage.getItem('User'));
    try {
      await axios.get(`orders/${userInfo.id}`).then((response) => {
        setOrders(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getOrders();
  }, []);

  return (
    orders.length
      ? (
        <>
          {
            orders.map((item) => (
              <button
                key={ item.id }
                onClick={ () => navigate(`/customer/orders/${item.id}`) }
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
                        data-testid={ `customer_orders__
                        element-delivery-status-${item.id}` }
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
      ) : (
        <h1>Sem pedidos cadastrados</h1>
      )
  );
}

export default OrdersCards;
