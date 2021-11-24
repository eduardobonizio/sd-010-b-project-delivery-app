import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardOrderSeller from '../components/CardOrderSeller';
import { getAllSales } from '../services/API';

function SellerOrders() {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    const { token } = JSON.parse(localStorage.user);
    const execute = async () => {
      const data = await getAllSales(token);
      setSales(data);
    };
    execute();
  }, []);

  return (
    <>
      <Header userRole="seller" />
      <div className="boxPageOrder">
        {
          sales.map((sale) => (<CardOrderSeller
            key={ sale.id }
            sale={ sale }
          />))
        }
      </div>
    </>
  );
}

export default SellerOrders;
