import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getAll } from '../apis/sales';

import '../styles/orderCard.css';

function OrderCard({ order: { id, order, status, date, price } }) {
  const generateBackgroundColor = () => {
    switch (status) {
    case 'Pendente':
      return 'rgb(217 195 80)';

    case 'Preparando':
      return 'rgb(134 211 80)';

    case 'Entregue':
      return 'rgb(59 213 178)';

    default:
      return 'white';
    }
  };

  useEffect(() => {
    console.log(getAll());
  }, []);

  return (
    <Link to={ `localhost:3000/customer/orders/${id}` }>
      <main
        className="order-card__main-container"
        data-testid={ `customer_products__element-order-date-${id}` }
      >
        <section className="order-card__order-number">
          <span className="order-card__order-label">Pedido</span>
          <span>{order}</span>
        </section>
        <section
          style={ { backgroundColor: generateBackgroundColor() } }
          className="order-card__order-status"
        >
          {status.toUpperCase()}
        </section>
        <span className="order-card__order-infos">
          <section className="order-card__order-info-date">{date}</section>
          <section className="order-card__order-info-price">
            {`R$ ${price.toFixed(2)}`}
          </section>
        </span>
      </main>
    </Link>
  );
}

OrderCard.propTypes = ({
  id: PropTypes.string,
  order: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.number,
}).isRequired;

export default OrderCard;
