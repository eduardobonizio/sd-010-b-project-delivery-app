import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import OrderCardSelle from '../components/orderCardSeller';
import { getSales } from '../services/sales';

function CustomerOrders() {
  const [userObj, setUserObj] = useState({});
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filterSales = (data) => {
    const salesSelected = data.filter((sale) => sale.sellerId === userObj.id);
    return salesSelected;
  };

  const fetchSales = async () => {
    const salesFetch = await getSales();
    const salesData = salesFetch.data;
    const filteredData = filterSales(salesData);

    setSales(filteredData);
    setIsLoading(false);
  };

  const renderOrderCards = () => {
    const render = sales.map((sale) => <OrderCardSelle key={ sale.id } order={ sale } />);
    return render;
  };

  useEffect(async () => {
    setUserObj(JSON.parse(localStorage.getItem('user')));
    fetchSales();
  }, [isLoading]);

  console.log('estado:', sales);
  if (isLoading) return <h1>Carregando...</h1>;
  return (
    <div>
      <Navbar name={ userObj.name } />
      { renderOrderCards() }
    </div>
  );
}

export default CustomerOrders;
