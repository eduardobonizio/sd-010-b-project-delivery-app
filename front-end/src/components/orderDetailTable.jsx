import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import OrderDetailHeader from './orderDetailHeader';
import OrderDetailsTbody from './orderDetailsTbody';
import Thead from './Thead';
import { getSale } from '../services/sales';

function OrderDetailsTable(props) {
  const { saleId } = props;
  const [sale, setSale] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getSaleById = async () => {
    const five = saleId; // nao ta passando pra requisicao
    const selectedSale = await getSale(five);
    setSale(selectedSale);
    setIsLoading(false);
  };

  useEffect(() => {
    getSaleById();
  }, []);

  console.log(Number(saleId));
  console.log(sale);

  if (isLoading) return <h1>Carregando...</h1>;
  return (
    <main>
      <OrderDetailHeader />
      <table>
        <Thead />
        <OrderDetailsTbody />
      </table>
      <p data-testid="customer_checkout__element-order-total-price">total</p>
    </main>
  );
}

OrderDetailsTable.propTypes = {
  saleId: PropTypes.string.isRequired,
};

export default OrderDetailsTable;
