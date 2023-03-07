import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import CustumerProducts from './pages/CustomerProducts';
import Register from './components/register';
import MyProvider from './context/MyProvider';
import AdminManage from './pages/AdminManage';

function App() {
  return (
    <MyProvider>
      <div>
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/" element={ <Navigate to="/login" replace /> } />
          <Route path="/customer/products" element={ <CustumerProducts /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/admin/manage" element={ <AdminManage /> } />
        </Routes>
      </div>
    </MyProvider>
  );
}

export default App;
