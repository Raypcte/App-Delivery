import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import CustumerProducts from './pages/CustomerProducts';
import Register from './pages/Register';
import MyProvider from './context/MyProvider';
import Checkout from './pages/Checkout';
import CustomerOrders from './pages/CustomerOrders';

function App() {
  return (
    <MyProvider>
      <div>
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/" element={ <Navigate to="/login" replace /> } />
          <Route path="/customer/products" element={ <CustumerProducts /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/customer/checkout" element={ <Checkout /> } />
          <Route path="/customer/orders/:id" element={ <CustomerOrders /> } />
        </Routes>
      </div>
    </MyProvider>
  );
}

export default App;
