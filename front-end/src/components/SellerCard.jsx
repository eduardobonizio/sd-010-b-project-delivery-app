import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/orderCard.css';

const LEFTPAD = -4;

function SellerCard({ order: {
  id, delivery_number: deliveryNumber,
  delivery_address: deliveryAddress,
  status, sale_date: saleDate, total_price: totalPrice,
} }) {
  const generatebackgroundcolor = () => {
    switch (status.toUpperCase()) {
    case 'PENDENTE':
      return 'rgb(215, 195, 80)';

    case 'PREPARANDO':
      return 'rgb(135, 215, 80)';

    case 'ENTREGUE':
      return 'rgb(60, 215, 180)';

    case 'ENVIADO':
      return 'rgb(60, 215, 220)';

    default:
      return 'white';
    }
  };

  return (
    <Link to={ `/${id}` }>
      <main className="order-card__main-container">
        <section className="order-card__order-number">
          <span className="order-card__order-label">Pedido</span>
          <span data-testid={ `seller_orders__element-order-id-${id}` }>
            {(`0000${id}`).slice(LEFTPAD)}
          </span>
        </section>
        <section
          style={ { backgroundColor: generatebackgroundcolor() } }
          className="order-card__order-status"
          data-testid={ `seller_orders__element-delivery-status-${id}` }
        >
          {status.toUpperCase()}
        </section>
        <span className="order-card__order-infos">
          <section data-testid={ `customer_orders__element-order-date-${id}` }>
            {new Date(saleDate).toLocaleDateString()}
          </section>
          <section
            className="order-card__order-info-price"
            data-testid={ `customer_orders__element-order-date-${id}` }
          >
            {`R$ ${Number(totalPrice).toFixed(2)}`}
          </section>
          <p
            data-testid={ `seller_orders__element-card-address-${id}` }
          >
            {` ${deliveryAddress}, ${deliveryNumber}` }
          </p>
        </span>
      </main>
    </Link>
  );
}

SellerCard.propTypes = ({
  id: PropTypes.string,
  delivery_number: PropTypes.number,
  status: PropTypes.string,
  sale_date: PropTypes.string,
  total_price: PropTypes.number,
}).isRequired;

export default SellerCard;
