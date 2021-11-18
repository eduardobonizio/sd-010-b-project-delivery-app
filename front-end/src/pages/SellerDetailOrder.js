/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderNavBar from '../components/orderNavBar';
import TableProducts from '../components/tableProducts';
import fetchGetSaleProducts from '../services/saleProductsAPI';
import NavBar from '../components/navBar';

export default function SellerDetailOrder() {
  const [sale, setSale] = useState([]);
  const { id } = useParams();

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
      <NavBar isCustomer={ false } nameButtonOrder="Pedidos" linkOrder="/seller/orders" />
      <div className="m-20">
        <h1 className="text-3xl border-b-2 border-yellow-color inline-block py-2">Detalhe do pedido</h1>
        <div className="border mt-10 p-10 rounded-3xl shadow-md flex flex-col">

          {sale.length !== 0 && (
            <OrderNavBar
              type="seller"
              order={ sale[0] }
            />)}

          {sale.length !== 0 && (
            <TableProducts
              type="seller"
              products={ sale }
            />)}
          {sale.length !== 0 && (
            <div
              className="bg-yellow-color self-end mt-10 py-2 px-8 rounded-md font-medium text-xl"
            >
              Total: R$
              <span
                className="ml-1"
                data-testid="seller_order_details__element-order-total-price"
              >
                {sale[0].totalPrice && sale[0].totalPrice.replace('.', ',')}

              </span>
            </div>)}
        </div>
      </div>
    </div>
  );
}

SellerDetailOrder.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
