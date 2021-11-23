/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Total from '../components/Total';
import Header from '../components/Header';
import Order from '../components/Order';
import SaleApi from '../service/saleProductsAPI';
import AppContext from '../Context/AppContext';

function PagesOrderDetails() {
  const { id } = useParams();
  const { setDataSeler } = useContext(AppContext);
  useEffect(() => {
    const getApi = async () => {
      const result = await SaleApi(id);
      setDataSeler(result);
    };
    getApi();
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <Total />
      <Order isRemoveBtn={ false } />
    </>
  );
}

export default PagesOrderDetails;
