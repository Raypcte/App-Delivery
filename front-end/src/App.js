import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import CustumerProducts from './pages/CustomerProducts';
import Register from './pages/Register';
import MyProvider from './context/MyProvider';
import Checkout from './pages/Checkout';
import CustomerOrders from './pages/customerOrders';

function App() {
  return (
    <MyProvider>
      <div>
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/" element={ <Navigate to="/login" replace /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/customer/products" element={ <CustumerProducts /> } />
          <Route path="/customer/orders/:id" element={ <CustomerOrders /> } />
          <Route path="/customer/checkout" element={ <Checkout /> } />
        </Routes>
      </div>
    </MyProvider>
  );
}

export default App;
