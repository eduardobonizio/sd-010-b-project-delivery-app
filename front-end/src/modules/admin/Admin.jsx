import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import Form from './components/Form';
import UserList from './components/UserList';

function Admin() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <NavBar
        item1="GERENCIAR USUÁRIOS"
        user={ user.name }
      />
      <Form />
      <UserList />
    </div>
  );
}

export default Admin;
