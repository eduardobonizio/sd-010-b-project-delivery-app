/* eslint-disable max-len */
import React, { useEffect } from 'react';
import Aos from 'aos';

import FormADM from '../components/formADM';
import NavBar from '../components/navBar';
import UserList from '../components/userList';
import 'aos/dist/aos.css';

export default function Admin() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <>
      <NavBar nameButtonOrder="Gerenciar Usuários" linkOrder="/admin/manage" />
      <h2
        data-aos="fade-right"
        className="inline-flex pt-20 p-2 ml-20 text-3xl border-b-2 border-yellow-color"
      >
        Cadastrar novo usuario
      </h2>
      <FormADM />
      <UserList />
    </>
  );
}
