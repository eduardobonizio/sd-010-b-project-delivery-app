import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
// import {
//   formatManipulatePrice,
//   formatSaveAndRenderPrice,
//   formatedSales,
// } from '../helpers/functions';
// import api from '../services/api';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [order, setOrder] = useState([]);

  return (
    <OrderContext.Provider
      value={
        { setOrder, order }
      }
    >
      { children }
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  return context;
}

OrderProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes).isRequired,
};
