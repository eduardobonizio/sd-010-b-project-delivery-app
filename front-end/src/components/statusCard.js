/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import socket from '../utils/socket/socketClient';

export default function StatusCard({ order, type, linkDetail }) {
  const [status, setStatus] = useState(order.status);

  const dateNow = (date) => {
    const data = new Date(date);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  useEffect(() => {
    socket.on('changeStatus', (newStatus) => {
      if (newStatus.id === order.id) {
        setStatus(newStatus.status);
      }
    });
  }, [order.id]);
  return (
    <div
      className="transition duration-300 ease-in-out transform m-10 hover:-translate-y-1
      hover:scale-105 shadow-lg"
    >
      <Link to={ `${linkDetail}/${order.id}` }>
        <div
          className="text-xl flex space-x-4 border-t-8 border-dark-color rounded-lg p-2"
        >
          <div
            className="flex flex-col bg-yellow-color rounded-lg pl-4 border-r-2 pr-4
            items-center justify-center"
          >
            <p>PEDIDO</p>
            <p
              data-testid={ `${type}_orders__element-order-id-${order.id}` }
            >
              {order.id}
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <div className="flex bg-gray-200 font-semibold items-center p-4 rounded-lg">
                <p
                  data-testid={ `${type}_orders__element-delivery-status-${order.id}` }
                >
                  {status.toUpperCase()}
                </p>
              </div>
              <div
                className="border-l-2 pl-4 space-y-2 flex flex-col items-center
                justify-center"
              >
                <p
                  data-testid={ `${type}_orders__element-order-date-${order.id}` }
                >
                  {dateNow(order.saleDate)}
                </p>
                <p
                  className="border-t-2 w-full flex justify-center pt-2"
                  data-testid={ `${type}_orders__element-card-price-${order.id}` }
                >
                  {order.totalPrice.replace('.', ',')}
                </p>
              </div>
            </div>

            <div className="border-t-2 pt-1 w-full flex justify-end">
              <p
                data-testid={ `${type}_orders__element-card-address-${order.id}` }
              >
                {`${order.deliveryAddress}`}
              </p>
            </div>
          </div>

        </div>
      </Link>
    </div>
  );
}

StatusCard.propTypes = {
  linkDetail: PropTypes.string,
  order: PropTypes.shape({
    deliveryAddress: PropTypes.string,
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
  }),
  type: PropTypes.string,
}.isRequired;
