import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as S from '../styles/MeusPedidos';

function CardMeusPedidos({ orders, token }) {
  const history = useHistory();

  const { role } = token;
  const { id, sale_date: saleDate, status,
    total_price: totalPrice,
    delivery_address: deliveryAddress } = orders;

  const newDate = new Date(saleDate);
  const dia = newDate.getDate().toString().padStart(2, '0');
  const mes = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const ano = newDate.getFullYear();
  const dateFormat = `${dia}/${mes}/${ano}`;
  const ADRESS_SELLER = 'seller_orders__element-card-address-';

  function detailOrder(idUser) {
    history.push(`/${role}/orders/${idUser}`);
  }

  return (
    <S.buttonMeusPedidos
      type="button"
      onClick={ () => { detailOrder(id); } }
    >
      <div>
        <h2>Pedido</h2>
        <h2 data-testid={ `${role}_orders__element-order-id-${id}` }>{id}</h2>
      </div>
      <S.infoPedido>
        <S.statusPedido data-testid={ `${role}_orders__element-delivery-status-${id}` }>
          <S.textStatus>{status}</S.textStatus>
        </S.statusPedido>
        <div>
          <S.textDate data-testid={ `${role}_orders__element-order-date-${id}` }>
            {dateFormat}
          </S.textDate>
          <S.textPrice
            data-testid={ `${role}_orders__element-card-price-${id}` }
          >
            {totalPrice.replace('.', ',')}
          </S.textPrice>
        </div>
      </S.infoPedido>
      {role === 'seller'
        ? <h3 data-testid={ `${ADRESS_SELLER}${id}` }>{deliveryAddress}</h3>
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
