import React from 'react';
import Proptypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './css/OrderCard.css';

function OrderCard({ id, status, date, totalPrice }) {
  const dateArray = date.split('-');
  const day = `${dateArray[2][0]}${dateArray[2][1]}`;
  const month = `${dateArray[1][0]}${dateArray[1][1]}`;
  const year = `${dateArray[0][0]}${dateArray[0][1]}${dateArray[0][2]}${dateArray[0][3]}`;
  const formattedDate = `${day}/${month}/${year}`;
  const history = useHistory();

  const changePath = () => {
    history.push(`/customer/orders/${id}`);
  };
  return (
    <Card onClick={ changePath } className="card-container">
      <div
        data-testid={ `customer_orders__element-order-id-${id}` }
      >
        { `Pedido ${id}` }
      </div>
      <div data-testid={ `customer_orders__element-delivery-status-${id}` }>
        { status }
      </div>
      <div data-testid={ `customer_orders__element-order-date-${id}` }>
        { formattedDate }
      </div>
      <div data-testid={ `customer_orders__element-card-price-${id}` }>
        { `R$${totalPrice.toString().split('.').join(',')}` }
      </div>
    </Card>
  );
}

OrderCard.propTypes = {
  id: Proptypes.number.isRequired,
  status: Proptypes.string.isRequired,
  date: Proptypes.string.isRequired,
  totalPrice: Proptypes.string.isRequired,
};

export default OrderCard;
