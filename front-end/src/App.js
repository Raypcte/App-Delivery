import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Navigate to="/login" replace /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" />
      </Routes>
    </div>
  );
}

export default App;
