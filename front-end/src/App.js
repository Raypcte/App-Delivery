import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Login from './components/login';
import CustumerProducts from './pages/CustomerProducts';
import Register from './components/register';
import MyProvider from './context/MyProvider';
import OrdersCards from './components/OrderCards';
import OrderDetails from './components/orderDetails';

function App() {
  const navigation = useNavigate();

  const logOut = () => {
    localStorage.clear('User');
    return navigation('/login');
  };

  const isLogged = async () => {
    try {
      const info = JSON.parse(localStorage.getItem('User'));
      if (!info) return logOut();
      return navigation('customer/products');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLogged();
  }, []);

  return (
    <MyProvider>
      <div>
        <Routes>
          <Route path="/register" element={ <Register /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/" element={ <Navigate to="/login" replace /> } />
          <Route path="/customer/products" element={ <CustumerProducts /> } />
          <Route path="/customer/orders" element={ <OrdersCards /> } />
          <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
        </Routes>
      </div>
    </MyProvider>
  );
}

export default App;
