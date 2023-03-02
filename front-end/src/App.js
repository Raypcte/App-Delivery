import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import CustumerProducts from './pages/CustomerProducts';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Navigate to="/login" replace /> } />
        <Route path="/customer/products" element={ <CustumerProducts /> } />
      </Routes>
    </div>
  );
}

export default App;
