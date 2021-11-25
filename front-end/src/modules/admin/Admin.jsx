import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import { AdminProvider } from '../../hooks/useAdmin';
import Form from './components/Form';
import UserList from './components/UserList';

function Admin() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <AdminProvider>
      <div className="row justify-content-center">
        <NavBar
          item1="Gerenciar usuários"
          user={ user.name }
        />
        <div className="col-3">
          <Form />
        </div>
        <div className="col-8">
          <UserList />
        </div>
      </div>
    </AdminProvider>
  );
}

export default Admin;
