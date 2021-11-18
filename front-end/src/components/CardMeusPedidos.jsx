import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as S from '../styles/MeusPedidos';

function CardMeusPedidos({ orders, token }) {
  const history = useHistory();
  function detailOrder(id) {
    history.push(`/customer/orders/details/${id}`);
  }
  const { role } = token;

  const { id, sale_date: saleDate, status,
    total_price: totalPrice,
    delivery_address: deliveryAddress } = orders;

  return (
    <S.buttonMeusPedidos
      type="button"
      onClick={ () => { detailOrder(id); } }
    >
      <div>
        <h2>Pedido</h2>
        <h2 data-testid={ `customer_orders__element-order-id-${id}` }>{id}</h2>
      </div>
      <S.infoPedido>
        <S.statusPedido data-testid={ `customer_orders__element-delivery-status-${id}` }>
          <S.textStatus>{status}</S.textStatus>
        </S.statusPedido>
        <div>
          <S.textDate data-testid={ `customer_orders__element-order-date-${id}` }>
            {saleDate}
          </S.textDate>
          <S.textPrice>
            R$
            {' '}
            {totalPrice}
          </S.textPrice>
        </div>
      </S.infoPedido>
      {role === 'seller'
        ? <h3>{deliveryAddress}</h3>
        : null}
    </S.buttonMeusPedidos>
  );
}

CardMeusPedidos.propTypes = {
  orders: PropTypes.shape({
    id: PropTypes.number,
    sale_date: PropTypes.string,
    status: PropTypes.string,
    total_price: PropTypes.string,
    delivery_address: PropTypes.string,
  }).isRequired,
  token: PropTypes.shape({
    role: PropTypes.string,
  }).isRequired,
};

export default CardMeusPedidos;
