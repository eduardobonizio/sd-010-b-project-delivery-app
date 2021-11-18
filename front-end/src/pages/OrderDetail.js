import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import socket from 'socket.io-client'


export default function OrderDetail() {
  const [status, setStatus] = useState()

  const currentDate = (date) => {
    const data = new Date(date);
    const dia = data.getDate();
    const mes = (data.getMonth() + 1);
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };
  
  socket.on()
  useEffect(() => {
  }, [])

  return (
    <div>
      <Header />
      <Link to={'acesso à tela de detalhes'}>
        <span
          data-testid={ `customer_products__card-orderId-${id}`  }
        >
          (id do pedido)
        </span>
        <span
          data-testid={ `customer_products__card-deliveryStatus-${id}` }
        >
          status(pendente/entregue/preparado)
        </span>
        <span
          data-testid={ `customer_products__element-order-date-${id}` }
        >
          {currentDate}
        </span>
        <span
          data-testid={ `customer_products__card-price-${id}`}
        >
          (preço total)
        </span>
      </Link>
    </div>
  );
}
