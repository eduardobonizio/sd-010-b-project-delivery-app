/* eslint-disable max-len */
import React from 'react';
import FormADM from '../components/formADM';
import NavBar from '../components/navBar';
import UserList from '../components/userList';

export default function Admin() {
  return (
    <>
      <NavBar />
      <h2 className="table border-b-2 border-yellow-color p-1 ">
        Cadastrar novo usuario
      </h2>
      <FormADM />
      <UserList />
    </>
  );
}
