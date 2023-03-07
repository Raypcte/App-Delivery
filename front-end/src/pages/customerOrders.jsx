import React, { useState, useEffect, useCallback } from 'react';
import OrderCard from '../components/customerOrderCards';
import axios from '../utils/axiosIstance';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  const getOrders = useCallback(async () => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    try {
      await axios.get(`sales/${userInfo.id}`).then((response) => {
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
      ? orders.map(({ id, status, saleDate, totalPrice }, index) => (
        <OrderCard
          key={ index }
          id={ id }
          status={ status }
          saleDate={ saleDate }
          totalPrice={ totalPrice }
        />))
      : <h4>Sem pedidos cadastrados</h4>
  );
}

export default CustomerOrders;
