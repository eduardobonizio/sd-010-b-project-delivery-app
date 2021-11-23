import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardOrderSeller from '../components/CardOrderSeller';

function SellerOrders() {
  const [sales, setSales] = useState([]);

  const getAllSales = async () => {
    const { token } = JSON.parse(localStorage.user);
    const endPoint = 'http://localhost:3001/sales';
    const { data } = await axios.get(endPoint, { headers: { Authorization: token } });
    return setSales(data);
  };

  useEffect(() => {
    getAllSales();
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
