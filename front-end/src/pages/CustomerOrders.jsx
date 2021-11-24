import React, { useEffect, useState } from 'react';
import CardOrderCustomer from '../components/SalesOrder/CardOrderCustomer';
import Header from '../components/Header';
import { getAllSales } from '../services/API';

function CustomerOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.user);
    const execute = async () => {
      try {
        const data = await getAllSales(token);
        localStorage.setItem('carrinho', JSON.stringify([]));
        setSales(data);
      } catch (error) {
        return error;
      }
    };
    execute();
  }, []);

  return (
    <>
      <Header userRole="customer" />
      <div className="boxPageOrder">
        {
          sales.map((sale) => <CardOrderCustomer key={ sale.id } sale={ sale } />)
        }
      </div>
    </>
  );
}

export default CustomerOrders;
