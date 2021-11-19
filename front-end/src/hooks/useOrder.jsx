import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
// import socketIOClient from 'socket.io-client';

// const URL = 'http://localhost:3001';
// import {
//   formatManipulatePrice,
//   formatSaveAndRenderPrice,
//   formatedSales,
// } from '../helpers/functions';
// import api from '../services/api';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [customerOrders, setCustomerOrders] = useState([]);
  const [customerSingleOrder, setCustomerSingleOrder] = useState([]);
  const [sellerOrders, setSellerOrders] = useState([]);
  const [sellerSingleOrder, setSellerSingleOrder] = useState([]);

  // useEffect(() => {
  //   const client = socketIOClient(URL);

  //   client.on('updateStatus', (data) => {
  //     const updateStatusOrder = [...customerOrders];
  //     const findOrder = updateStatusOrder.findIndex((order) => order.id === data.id);
  //     if (findOrder >= 0) {
  //       updateStatusOrder[findOrder] = data.status;
  //       setCustomerOrders(updateStatusOrder);
  //     }
  //   });
  // }, []);

  return (
    <OrderContext.Provider
      value={
        { customerOrders,
          setCustomerOrders,
          customerSingleOrder,
          setCustomerSingleOrder,
          sellerOrders,
          setSellerOrders,
          sellerSingleOrder,
          setSellerSingleOrder }
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
