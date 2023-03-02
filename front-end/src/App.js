import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={ <Login /> }> </Route>
        <Route path="/" element={ <Navigate to="/login" replace /> } />
      </Routes>
    </div>
  );
}

export default App;
