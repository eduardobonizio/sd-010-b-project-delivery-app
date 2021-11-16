import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/navbar';
import * as style from './style';
import { apiGetAllSales } from '../../../services/salesProducts/apiRequestSalesProduct';
/* eslint-disable */

export default function ClientOrderDetails() {
  const [Array, setArray] = useState([
    { pedido: 1, status: 'pendente', data: '01/01/0000', valor: 1000 },
    { pedido: 2, status: 'entregue', data: '02/02/0000', valor: 1020 },
    { pedido: 3, status: 'preparando', data: '03/03/0000', valor: 1040 },
  ]);

  const [sales, setSales] = useState([]);

  useEffect(() => {
    const data = apiGetAllSales()
      .then((res) => res)
      .catch((err) => console.log('Erro:', err));

    setSales(data);
  }, [])

  useEffect(() => {
    console.log(sales);
  }, [sales])

  // trocar o index pelo numero do pedido

  return (
    <>
      <Header />
      <style.DetailsContainer>
        {
          Array.map((curr, index) => {
            return (
              <Link key={`link:${index}`} to={ `${index}` }>
                <style.DetailsCard key={`card:${index}`}>
                  <p key={ `pedido:${index}` } data-testid={ `customer_orders__element-order-id-${index}` }>
                    { curr.pedido }
                  </p>
                  <p key={ `status:${index}` } data-testid={ `customer_orders__element-delivery-status-${index}` }>
                    { curr.status }
                  </p>
                  <p key={ `data:${index}` } data-testid={ `customer_orders__element-order-date-${index}` }>
                    { curr.data }
                  </p>
                  <p key={ `valor:${index}` }>
                    { curr.valor }
                  </p>
                </style.DetailsCard>
              </Link>
            )
          })
        }
      </style.DetailsContainer>
    </>
  );
}
