import React, { useEffect, useState } from 'react';
import Order from '../components/Order';
import SaleApi from '../service/saleAPI';

function PagesOrder() {
  const [dataSeler, setDataseler] = useState();
  useEffect(() => {
    const getApi = async () => {
      const { sales } = await SaleApi();
      setDataseler(sales);
    };
    getApi();
  }, []);
  return (
    <>
      <h1>{dataSeler}</h1>
      {dataSeler && dataSeler.map((e, index) => (
        <Order
          status={ e.status }
          date={ e.saleDate }
          total={ e.totalPrice }
          id={ e.id }
          key={ index }
        />
      ))}
    </>

  );
}

export default PagesOrder;
