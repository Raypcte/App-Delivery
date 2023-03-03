import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import axios from './utils/axiosIstance';
import Login from './components/login';
import CustumerProducts from './pages/CustomerProducts';
import Register from './components/register';
import MyProvider from './context/MyProvider';

function App() {
  // const navigation = useNavigate();

  // const isLogged = () => {
  //   const info = JSON.parse(localStorage.getItem('User'));
  //   const user = axios.get(`user/${user.id}`);
  //   if (!user || user.name !== info.name) {
  //     localStorage.clear();
  //     return navigation('/login');
  //   }
  //   return navigation('customer/products');
  // };

  // const logOut = () => {
  //     localStorage.clear();
  //     return navigation('/login');
  // }

  return (
    <MyProvider>
      <div>
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/" element={ <Navigate to="/login" replace /> } />
          <Route path="/customer/products" element={ <CustumerProducts /> } />
          <Route path="/register" element={ <Register /> } />
        </Routes>
      </div>
    </MyProvider>
  );
}

export default App;
