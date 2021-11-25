import React from 'react';
import NavBar from '../components/Navbar';
import ManagerUser from '../components/ManegerUserAdmin';
import ListUser from '../components/ListUserAdmin';

function Admin() {
  // --adm2@21!!--

  return (
    <div>
      <NavBar />
      <ManagerUser />
      <h2>Lista de usuarios</h2>
      <ListUser />

    </div>
  );
}

export default Admin;
