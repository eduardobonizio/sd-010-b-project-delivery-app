/* eslint-disable max-len */
import React from 'react';
import FormADM from '../components/formADM';
import NavBar from '../components/navBar';
import UserList from '../components/userList';

export default function Admin() {
  return (
    <>
      <NavBar />
      <h2 className="inline-flex pt-20 p-2 ml-20 text-3xl border-b-2 border-yellow-color">
        Cadastrar novo usuario
      </h2>
      <FormADM />
      <UserList />
    </>
  );
}
