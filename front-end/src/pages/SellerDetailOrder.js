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
      <p>Detalhe do pedido</p>
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
        <p
          data-testid="seller_order_details__element-order-total-price"
        >
          {sale[0].totalPrice && sale[0].totalPrice.replace('.', ',')}
        </p>)}
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
