import React from 'react';
import Header from '../components/Header';
import ListProducts from '../components/ListProducts';
import { getStorage } from '../utils/localStorage';

export default function Products() {
  console.log('chegueiiiiii');
  return (
    <>
      <Header
        pageName="PRODUTOS"
        yourOrder
        userName={ getStorage('user') && getStorage('user').name }
      />
      <ListProducts />
    </>
  );
}
