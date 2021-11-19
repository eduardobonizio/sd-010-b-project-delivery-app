/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StatusCardFragment from './statusCardFragment';

import socket from '../utils/socket/socketClient';

export default function StatusCard({ order, type, linkDetail }) {
  const [status, setStatus] = useState(order.status);
  const [bgColorStatus, setBgColorStatus] = useState('bg-red-400');

  useEffect(() => {
    if (status === 'Em Trânsito') {
      setBgColorStatus('bg-yellow-400');
    } else if (status === 'Preparando') {
      setBgColorStatus('bg-blue-400');
    } else if (status === 'Entregue') {
      setBgColorStatus('bg-green-400');
    }
  }, [status]);

  // const dateNow = (date) => {
  //   const data = new Date(date);
  //   const dia = data.getDate().toString().padStart(2, '0');
  //   const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  //   const ano = data.getFullYear();
  //   return `${dia}/${mes}/${ano}`;
  // };

  useEffect(() => {
    socket.on('changeStatus', (newStatus) => {
      if (newStatus.id === order.id) {
        setStatus(newStatus.status);
      }
    });
  }, [order.id]);
  return (
    <div className="m-10 transition duration-300 ease-in-out transform shadow-lg hover:-translate-y-1 hover:scale-105">
      <Link to={ `${linkDetail}/${order.id}` }>
        <div className="flex p-2 space-x-4 text-xl border-t-8 rounded-lg border-dark-color">
          <div className="flex flex-col items-center justify-center pl-4 pr-4 bg-gray-200 border-r-2 rounded-lg">
            <p>PEDIDO</p>
            <p
              data-testid={ `${type}_orders__element-order-id-${order.id}` }
            >
              {order.id}
            </p>
          </div>

          <StatusCardFragment
            bgColorStatus={ bgColorStatus }
            order={ order }
            type={ type }
            status={ status }
          />

          {/* <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <div className={ `flex items-center p-4 font-semibold ${bgColorStatus} rounded-lg` }>
                <p
                  data-testid={ `${type}_orders__element-delivery-status-${order.id}` }
                >
                  {status.toUpperCase()}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center pl-4 space-y-2 border-l-2">
                <p
                  data-testid={ `${type}_orders__element-order-date-${order.id}` }
                >
                  {dateNow(order.saleDate)}
                </p>
                <p
                  className="flex justify-center w-full pt-2 border-t-2"
                  data-testid={ `${type}_orders__element-card-price-${order.id}` }
                >
                  {order.totalPrice.replace('.', ',')}
                </p>
              </div>
            </div>

            <div className="flex justify-end w-full pt-1 border-t-2">
              <p
                data-testid={ `${type}_orders__element-card-address-${order.id}` }
              >
                {`${order.deliveryAddress}`}
              </p>
            </div>
          </div> */}

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
