import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import api from '../services/api';

const DeliveryContext = createContext();

export function DeliveryProvider({ children }) {
  const [sales, setSales] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalSales = sales
      .reduce((acc, cur) => acc + (cur.quantity * Number(cur.price)), 0);
    setTotal(totalSales.toFixed(2));
  }, [sales]);

  function handleTotalSale(sale) {
    const newSalesQuantity = [...sales];
    const findSale = newSalesQuantity.findIndex((indexSale) => indexSale.id === sale.id);

    if (findSale >= 0) {
      newSalesQuantity[findSale] = sale;
      setSales(newSalesQuantity);
      return;
    }
    return setSales([...sales, sale]);
  }
  return (
    <DeliveryContext.Provider value={ { handleTotalSale, total } }>
      { children }
    </DeliveryContext.Provider>
  );
}

export function useDelivery() {
  const context = useContext(DeliveryContext);
  return context;
}

DeliveryProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.node).isRequired,
};
