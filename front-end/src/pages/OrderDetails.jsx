import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import OrderDetailsCard from '../components/OrderDetailsCard';
import axios from '../utils/axiosIstance';

function OrderDetails() {
  const [order, setOrder] = useState(undefined);
  const location = useLocation();

  const getOrder = useCallback(async () => {
    try {
      const orderId = location.pathname.split('/')[3];
      const userId = JSON.parse(localStorage.getItem('user'))?.id;

      await axios.get(`orders/${userId}/${orderId}`).then((response) => {
        setOrder(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getOrder();
  }, []);

  return (
    order
      ? (
        <OrderDetailsCard
          id={ order.id }
          status={ order.status }
          saleDate={ order.saleDate }
          totalPrice={ order.totalPrice }
          products={ order.products }
          seller={ order.seller }
        />)
      : null
  );
}

export default OrderDetails;
