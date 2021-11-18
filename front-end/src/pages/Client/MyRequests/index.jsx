import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { apiGetAllSales } from '../../../services/salesProducts/apiRequestSalesProduct';
import Header from '../../../components/navbar';
import * as style from './style';

export default function CustomerSales() {
  // const [sales, setSales] = useState([
  //   { pedido: 1, status: 'pendente', data: '01/01/0000', valor: 1000 },
  // ]);

  const [sales, setSales] = useState([]);

  const getSales = () => {
    apiGetAllSales()
      .then((res) => setSales(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSales();
  }, []);

  return (
    <>
      <Header />
      <style.DetailsContainer>
        { sales.length > 1
          ? sales.map((curr, index) => (
            <Link key={ `link:${index}` } to={ `${curr.id}` }>
              <style.DetailsCard key={ `card:${index}` }>
                <p
                  key={ `pedido:${index}` }
                  data-testid={ `customer_orders__element-order-id-${curr.id}` }
                >
                  {console.log(curr.status)}
                  { curr.id }
                </p>
                <p
                  key={ `status:${index}` }
                  data-testid={ `customer_orders__element-delivery-status-
                  ${curr.id}` }
                >
                  { curr.status }
                </p>
                <p
                  key={ `data:${index}` }
                  data-testid={ `customer_orders__element-order-date-${curr.id}` }
                >
                  { curr.sale_date }
                </p>
                <p
                  key={ `valor:${curr.total_price}` }
                >
                  { curr.total_price }
                </p>
              </style.DetailsCard>
            </Link>
          )) : 'Carregando'}
      </style.DetailsContainer>
    </>
  );
}
