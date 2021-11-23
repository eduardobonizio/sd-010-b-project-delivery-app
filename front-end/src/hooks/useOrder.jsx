import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
// import { updateOrders, updateSingleOrder } from './functions/helpers';
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
  const [customerSingleOrder, setCustomerSingleOrder] = useState({});
  const [sellerOrders, setSellerOrders] = useState([]);
  const [sellerSingleOrder, setSellerSingleOrder] = useState({});

  // useEffect(() => {
  //   const client = socketIOClient(URL);

  //   client.on('updateStatus', ({ userId, sellerId, status }) => {
  //     const dataCustomer = { userId, status };
  //     const dataSeller = { sellerId, status };
  //     updateOrders(customerOrders, dataCustomer, setCustomerOrders);
  //     updateSingleOrder(customerSingleOrder, dataCustomer, setCustomerSingleOrder);
  //     updateOrders(sellerOrders, dataSeller, setSellerOrders);
  //     updateSingleOrder(sellerSingleOrder, dataSeller, setSellerSingleOrder);
  //   });
  // }, []);

  function emitUpdateOrder(data) {
    const client = socketIOClient(URL);
    client.emit('updateStatus', data);
  }

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
          setSellerSingleOrder,
          emitUpdateOrder }
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
