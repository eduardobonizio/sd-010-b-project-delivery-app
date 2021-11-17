import React, { useContext, useEffect } from 'react';
import AppContext from '../Context/AppContext';
// import { Redirect  } from 'react-router-dom';

function Header() {
  const { dataUser, setDataUser } = useContext(AppContext);

  useEffect(() => {
    const getData = async () => {
      const data = await JSON.parse(localStorage.getItem('user'));
      setDataUser(data);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section>
      <span>Produtos</span>
      <span>MeusPedidos</span>
      <span>{dataUser.name}</span>
      <span>Sair</span>
    </section>
  );
}

export default Header;
