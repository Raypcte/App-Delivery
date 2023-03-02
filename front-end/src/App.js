import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import CustumerProducts from './pages/CustomerProducts';
import Register from './components/register';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Navigate to="/login" replace /> } />
        <Route path="/customer/products" element={ <CustumerProducts /> } />
        <Route path="/register" element={ <Register /> } />
      </Routes>
    </div>
  );
}

export default App;
