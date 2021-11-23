import React, { useEffect, useState } from 'react';
import SaleApi from '../service/saleAPI';

function PagesOrderDetails() {
  const [dataSeler, setSeller] = useState();
  useEffect(() => {
    const getApi = async () => {
      const result = await SaleApi();
      setSeller(result);
    };
    getApi();
  }, []);

  return (
    <h1>
      {' '}
      {console.log(dataSeler)}

    </h1>

  );
}

export default PagesOrderDetails;
