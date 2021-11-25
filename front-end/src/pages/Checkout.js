import React from 'react';
import Header from '../components/Header';
import ListItemCheckout from '../components/ListItemCheckout';
import { getStorage } from '../utils/localStorage';

export default function Checkout() {
  return (
    <>
      <Header
        pageName="PRODUTOS"
        yourOrder
        userName={ getStorage('user') && getStorage('user').name }
      />
      <ListItemCheckout />
    </>
  );
}
