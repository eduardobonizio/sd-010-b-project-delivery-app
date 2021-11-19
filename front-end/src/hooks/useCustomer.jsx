import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  formatManipulatePrice,
  formatSaveAndRenderPrice,
  formatedSales,
} from '../helpers/functions';
// import api from '../services/api';

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const initialSales = JSON.parse(localStorage.getItem('cart')) || [];
  const initialTotal = JSON.parse(localStorage.getItem('total')) || 0;

  const [sales, setSales] = useState(initialSales);
  const [total, setTotal] = useState(initialTotal);

  useEffect(() => {
    const totalSales = sales
      .reduce((acc, cur) => acc + (
        cur.quantity * formatManipulatePrice(cur.unitPrice)
      ), 0);

    const formatedTotal = formatSaveAndRenderPrice(totalSales.toFixed(2));
    setTotal(formatedTotal);
    localStorage.setItem('total', JSON.stringify(formatedTotal));
  }, [sales]);

  function handleTotalSale(sale) {
    const formatSale = formatedSales(sale);
    const newSalesQuantity = [...sales];
    const findSale = newSalesQuantity
      .findIndex((indexSale) => (indexSale.productId === sale.id));

    if (findSale >= 0) {
      newSalesQuantity[findSale] = formatSale;
      setSales(newSalesQuantity);
      localStorage.setItem('cart', JSON.stringify(newSalesQuantity));
      return;
    }

    localStorage.setItem('cart', JSON.stringify([...sales, formatSale]));
    return setSales([...sales, formatSale]);
  }

  function handleRemoveItemCart(id) {
    const removedProduct = sales.filter((sale) => sale.productId !== id);
    setSales(removedProduct);
    localStorage.setItem('cart', JSON.stringify(removedProduct));
  }

  return (
    <CustomerContext.Provider
      value={
        { handleRemoveItemCart,
          handleTotalSale,
          total,
          sales }
      }
    >
      { children }
    </CustomerContext.Provider>
  );
}

export function useCustomer() {
  const context = useContext(CustomerContext);
  return context;
}

CustomerProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes).isRequired,
};