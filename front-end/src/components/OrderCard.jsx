import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/orderCard.css';

const LEFTPAD = -4;

const locale = 'pt-br';

function OrderCard({ order: {
  id,
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
    <Link to={ `/customer/orders/${id}` }>
      <main className="order-card__main-container">
        <section className="order-card__order-number">
          <span className="order-card__order-label">Pedido</span>
          <span data-testid={ `customer_orders__element-order-id-${id}` }>
            {(`0000${id}`).slice(LEFTPAD)}
          </span>
        </section>
        <section
          style={ { backgroundColor: generatebackgroundcolor() } }
          className="order-card__order-status"
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </section>
        <span className="order-card__order-infos">
          <section
            className="order-card__order-info-date"
            data-testid={ `customer_orders__element-order-date-${id}` }
          >
            { new Date(saleDate).toLocaleDateString(locale)}
          </section>
          <section
            className="order-card__order-info-price"
            data-testid={ `customer_orders__element-card-price-${id}` }
          >
            {Number(totalPrice).toFixed(2).toString().replace('.', ',')}
          </section>
        </span>
      </main>
    </Link>
  );
}

OrderCard.propTypes = ({
  id: PropTypes.string,
  delivery_number: PropTypes.number,
  status: PropTypes.string,
  sale_date: PropTypes.string,
  total_price: PropTypes.number,
}).isRequired;

export default OrderCard;
