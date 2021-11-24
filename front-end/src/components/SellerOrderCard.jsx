import React from 'react';
import Proptypes from 'prop-types';
import { Card } from 'react-bootstrap';
import '../pages/css/Products.css';

function SellerOrderCard({ id, status, date, totalPrice, deliveryAddress,
  deliveryNumber }) {
  const dateArray = date.split('-');
  const day = `${dateArray[2][0]}${dateArray[2][1]}`;
  const month = `${dateArray[1][0]}${dateArray[1][1]}`;
  const year = `${dateArray[0][0]}${dateArray[0][1]}${dateArray[0][2]}${dateArray[0][3]}`;
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <a href={ `/seller/orders/${id}` }>
      <Card.Title
        data-testid={ `seller_orders__element-order-id-${id}` }
        style={ { fontSize: '5px' } }
      >
        Pedido
        { id }
      </Card.Title>
      <Card.Text>
        <span
          data-testid={ `seller_orders__element-delivery-status-${id}` }
        >
          { status }
        </span>
      </Card.Text>
      <Card.Text>
        <span
          data-testid={ `seller_orders__element-order-date-${id}` }
        >
          { formattedDate }
        </span>
      </Card.Text>
      <Card.Text>
        R$
        <span
          data-testid={ `seller_orders__element-card-price-${id}` }
        >
          { totalPrice.toString().split('.').join(',') }
        </span>
      </Card.Text>
      <Card.Text>
        <span
          data-testid={ `seller_orders__element-card-address-${id}` }
        >
          { `${deliveryAddress},${deliveryNumber}` }
        </span>
      </Card.Text>
    </a>
  );
}

SellerOrderCard.propTypes = {
  id: Proptypes.number.isRequired,
  status: Proptypes.string.isRequired,
  date: Proptypes.string.isRequired,
  totalPrice: Proptypes.string.isRequired,
  deliveryAddress: Proptypes.string.isRequired,
  deliveryNumber: Proptypes.string.isRequired,
};

export default SellerOrderCard;
