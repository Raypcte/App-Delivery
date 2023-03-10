import React from 'react';
import AdminFormRegister from '../components/AdminFormRegister';
import NavBar from '../components/Navbar';
import TableUsers from '../components/TableUsers';

export default function AdminManage() {
  return (
    <div>
      <NavBar />
      <AdminFormRegister />
      <TableUsers />
    </div>
  );
}
