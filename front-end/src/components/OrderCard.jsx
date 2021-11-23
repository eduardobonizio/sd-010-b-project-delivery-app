import React from 'react';
import Proptypes from 'prop-types';
import { Card } from 'react-bootstrap';

function OrderCard({ id, status, date, totalPrice }) {
  const dateArray = date.split('-');
  const formattedDate = `${dateArray[2][0]}${dateArray[2][1]}/
  ${dateArray[1][0]}${dateArray[1][1]}/
  ${dateArray[0][0]}${dateArray[0][1]}${dateArray[0][2]}${dateArray[0][3]}`;
  return (
    <>
      <Card.Title
        data-testid={ `customer_orders__element-order-id-${id}` }
        style={ { fontSize: '5px' } }
      >
        Pedido
        { id }
      </Card.Title>
      <Card.Text>
        <span
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          { status }
        </span>
      </Card.Text>
      <Card.Text>
        <span
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          { formattedDate }
        </span>
      </Card.Text>
      <Card.Text>
        R$
        <span
          data-testid={ `customer_orders__element-card-price-${id}` }
        >
          { totalPrice.toString().split('.').join(',') }
        </span>
      </Card.Text>
    </>
  );
}

OrderCard.propTypes = {
  id: Proptypes.number.isRequired,
  status: Proptypes.string.isRequired,
  date: Proptypes.string.isRequired,
  totalPrice: Proptypes.string.isRequired,
};

export default OrderCard;
