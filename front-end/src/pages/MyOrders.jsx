import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardOrder from '../components/SalesOrder/CardOrder';
import Header from '../components/Header';

function MyOrders() {
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
      <Header userRole="customer" />
      <div className="boxPageOrder">
        {
          sales.map((sale) => <CardOrder key={ sale.id } sale={ sale } />)
        }
      </div>
    </>
  );
}

export default MyOrders;
