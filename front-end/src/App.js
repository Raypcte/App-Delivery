import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import CustumerProducts from './pages/CustomerProducts';
import Register from './pages/Register';
import MyProvider from './context/MyProvider';
import AdminManage from './pages/AdminManage';
import Checkout from './pages/Checkout';
import CustomerOrders from './pages/customerOrders';
import OrderDetails from './pages/OrderDetails';

function App() {
  // const navigation = useNavigate();
  // const location = useLocation();

  // const logOut = () => {
  //   localStorage.clear('user');
  //   return navigation('/login');
  // };

  // const isLogged = async () => {
  //   try {
  //     const info = JSON.parse(localStorage.getItem('user'));
  //     if (!info
  //       && (location.pathname !== '/register' || location.pathname !== '/login')
  //     ) return logOut();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   isLogged();
  // }, []);

  return (
    <MyProvider>
      <div>
        <Routes>
          <Route path="/" element={ <Navigate to="/login" replace /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/customer/products" element={ <CustumerProducts /> } />
          <Route path="/customer/orders" element={ <CustomerOrders /> } />
          <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
          <Route path="/admin/manage" element={ <AdminManage /> } />
          <Route path="/customer/checkout" element={ <Checkout /> } />
        </Routes>
      </div>
    </MyProvider>
  );
}

export default App;
