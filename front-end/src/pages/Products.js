import React from 'react';
import Header from '../components/Header';
import ListProducts from '../components/ListProducts';
import { getStorage } from '../utils/localStorage';

export default function Products() {

  return (
    <>
      <Header pageName={"PRODUTOS"} yourOrder={'MEUS PEDIDOS'} userName={getStorage('user').name}/>
      <ListProducts />
    </>
  );
}
