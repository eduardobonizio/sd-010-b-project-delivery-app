import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatManipulatePrice, formatSaveAndRenderPrice } from '../helpers/functions';
// import api from '../services/api';

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [sales, setSales] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalSales = sales
      .reduce((acc, cur) => acc + (
        cur.quantity * formatManipulatePrice(cur.unitPrice)
      ), 0);

    const formatedTotal = formatSaveAndRenderPrice(totalSales.toFixed(2));
    const cartLocalStorage = {
      products: sales,
      total: formatedTotal,
    };
    setTotal(formatedTotal);
    localStorage.setItem('cart', JSON.stringify(cartLocalStorage));
  }, [sales]);

  function handleTotalSale(sale) {
    const subTotalPrice = (sale.quantity * sale.price).toFixed(2);
    const formatedSales = {
      productId: sale.id,
      name: sale.name,
      quantity: sale.quantity,
      unitPrice: formatSaveAndRenderPrice(sale.price),
      subTotal: formatSaveAndRenderPrice(subTotalPrice),
    };
    const newSalesQuantity = [...sales];
    const findSale = newSalesQuantity
      .findIndex((indexSale) => (indexSale.productId === sale.id));

    if (findSale >= 0) {
      newSalesQuantity[findSale] = formatedSales;
      setSales(newSalesQuantity);
      const cartLocalStorage = {
        products: newSalesQuantity,
        total,
      };
      localStorage.setItem('cart', JSON.stringify(cartLocalStorage));
      return;
    }
    const cartLocalStorage = {
      products: [...sales, formatedSales],
      total,
    };
    localStorage.setItem('cart', JSON.stringify(cartLocalStorage));
    return setSales([...sales, formatedSales]);
  }
  return (
    <CustomerContext.Provider value={ { handleTotalSale, total } }>
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
