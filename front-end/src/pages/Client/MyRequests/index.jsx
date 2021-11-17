import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { apiGetAllSales } from '../../../services/salesProducts/apiRequestSalesProduct';
import Header from '../../../components/navbar';
import * as style from './style';
/* eslint-disable */  // excluir essa linha quando for enviar o requisito para merge ( essa linha desabilita o eslint para que ele nao quebre o projeto)

export default function CustomerSales() {
  const [sales, setSales] = useState([
    { pedido: 1, status: 'pendente', data: '01/01/0000', valor: 1000 },
  ]);

  // const [sales, setSales] = useState([]);

  const getSales = () => {
    const data = apiGetAllSales()
      .then((res) => res)
      .catch((err) => console.log(err));

      console.log(data);

      // setSales(data);
  }

  useEffect(() => {
    console.log(getSales());
  }, []);

  useEffect(() => {
    console.log(sales);
  }, [sales]);

  return (
    <>
      <Header />
      <style.DetailsContainer>
        {
          sales.map((curr, index) => (
            <Link key={ `link:${index}` } to={ `${index}` }>
              <style.DetailsCard key={ `card:${index}` }>
                <p
                  key={ `pedido:${index}` }
                  data-testid={ `customer_orders__element-order-id-${index}` }
                >
                  { curr.pedido }
                </p>
                <p
                  key={ `status:${index}` }
                  data-testid={ `customer_orders__element-delivery-status-${index}` }
                >
                  { curr.status }
                </p>
                <p
                  key={ `data:${index}` }
                  data-testid={ `customer_orders__element-order-date-${index}` }
                >
                  { curr.data }
                </p>
                <p
                  key={ `valor:${index}` }
                >
                  { curr.valor }
                </p>
              </style.DetailsCard>
            </Link>
          ))
        }
      </style.DetailsContainer>
    </>
  );
}
