/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Aos from 'aos';

import OrderNavBar from '../components/orderNavBar';
import TableProducts from '../components/tableProducts';
import fetchGetSaleProducts from '../services/saleProductsAPI';
import NavBar from '../components/navBar';
import 'aos/dist/aos.css';

export default function CustomerDetailOrder() {
  const [sale, setSale] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);

  useEffect(() => {
    const getSale = async () => {
      const res = await fetchGetSaleProducts({ id });

      if (res.message) {
        console.log(res);
      } else {
        console.log(res);
        setSale([...res]);
      }
    };

    getSale();
  }, [id]);

  return (
    <div>
      <NavBar isCustomer nameButtonOrder="Meus Pedidos" linkOrder="/customer/orders" />
      <div className="m-20">
        <h1 className="inline-block py-2 mt-10 text-3xl border-b-2 border-yellow-color" data-aos="fade-right">Detalhe do pedido</h1>
        <div className="flex flex-col p-10 mt-10 ml-20 mr-20 border shadow-md rounded-3xl">

          {sale.length !== 0 && (
            <OrderNavBar
              type="customer"
              order={ { ...sale[0], sellerName: sale[2].name } }
            />)}

          {sale.length !== 0 && (
            <TableProducts
              type="customer"
              products={ sale }
            />)}
          {sale.length !== 0 && (
            <div
              // data-aos="fade-left"
              className="self-end px-8 py-2 mt-10 text-xl font-medium rounded-md bg-yellow-color"
            >
              Total: R$
              <span
                className="ml-1"
                data-testid="customer_order_details__element-order-total-price"
              >
                {sale[0].totalPrice && sale[0].totalPrice.replace('.', ',')}
              </span>
            </div>)}
        </div>
      </div>
    </div>
  );
}

CustomerDetailOrder.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
