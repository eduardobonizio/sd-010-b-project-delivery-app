import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function StatusCard({ order, arrayDataTestid, linkDetail }) {
  return (
    <div>
      <Link to={ `${linkDetail}/${order.id}` }>
        <p
          data-testid={ `${arrayDataTestid[0]}${order.seller_id}` }
        >
          {order.id}
        </p>
        <p
          data-testid={ `${arrayDataTestid[1]}${order.seller_id}` }
        >
          {order.status}
        </p>
        <p
          data-testid={ `${arrayDataTestid[2]}${order.seller_id}` }
        >
          {order.sale_date}
        </p>
        <p
          data-testid={ `${arrayDataTestid[3]}${order.seller_id}` }
        >
          {order.total_price}
        </p>
        <p
          data-testid={ `${arrayDataTestid[4]}${order.seller_id}` }
        >
          {`${order.delivery_address}`}
        </p>
      </Link>
    </div>
  );
}

StatusCard.propTypes = {
  arrayDataTestid: PropTypes.array,
  linkDetail: PropTypes.string,
  order: PropTypes.shape({
    delivery_adress: PropTypes.string,
    id: PropTypes.number,
    sale_date: PropTypes.string,
    seller_id: PropTypes.number,
    status: PropTypes.string,
    total_price: PropTypes.number,
  }),
}.isRequired;
