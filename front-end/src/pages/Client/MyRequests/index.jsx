import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { apiGetAllSales } from '../../../services/salesProducts/apiRequestSalesProduct';
import Header from '../../../components/navbar';
// import * as style from './style';

export default function CustomerSales() {
  const dateMoment = moment();
  console.log(dateMoment);

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
    <div>
      <Header />
      {sales.map(({ id, status, saleDate, totalPrice }) => {
        const date = moment(saleDate);
        return (
          <div key={ id }>
            {console.log(sales)}
            <Link key={ `link:${id}` } to={ `${id}` }>
              <p
                data-testid={ `customer_orders__element-order-id-${id}` }
              >
                {`Pedido:${id}`}
              </p>
              <p
                data-testid={ `customer_orders__element-order-id-${id}` }
              >
                {`Pedido:${id}`}
              </p>
              <p
                data-testid={ `customer_orders__element-delivery-status-${id}` }
              >
                { status }
              </p>
              <p
                data-testid={ `customer_orders__element-order-date-${id}` }
              >
                {console.log(saleDate)}
                { date.format('DD/MM/YYYY') }
              </p>
              <p
                data-testid={ `customer_orders__element-card-price-${id}` }
              >
                {console.log('price', totalPrice.replace('.', ','))}
                {totalPrice.replace('.', ',')}
              </p>

              <p
                data-testid={ `customer_orders__element-card-address-${id}` }
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
