import React from 'react';
import Header from '../components/Header';
import { getStorage } from '../utils/localStorage';

export default function OrderDetail() {
  return (
    <Header
      pageName="LISTA DE PEDIDOS"
      yourOrder={ false }
      userName={ getStorage('user') && getStorage('user').name }
    />
  );
}
