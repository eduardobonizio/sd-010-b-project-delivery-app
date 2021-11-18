import React, { useEffect } from 'react';
import * as style from './style';
import { apiGetAllSales } from '../../../services/salesProducts/apiRequestSalesProduct';

export default function SellerOrder() {
  /*
  fazer requisição da api
  cria funcao para salvar os dados da api
  fazer um map com os dados da api
  colocar os datatesteid
   */
  const getSales = () => {
    apiGetAllSales()
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSales();
  }, []);

  return (
    <>

      <header>
        header
      </header>
      <style.SellerOrdersContainer>
        oi
      </style.SellerOrdersContainer>

    </>
  );
}
