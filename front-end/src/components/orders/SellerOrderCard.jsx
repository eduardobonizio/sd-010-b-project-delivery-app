import React from 'react';
import Proptypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './css/OrderCard.css';
import { useHistory } from 'react-router';

function SellerOrderCard({ id, status, date, totalPrice, deliveryAddress,
  deliveryNumber }) {
  const dateArray = date.split('-');
  const day = `${dateArray[2][0]}${dateArray[2][1]}`;
  const month = `${dateArray[1][0]}${dateArray[1][1]}`;
  const year = `${dateArray[0][0]}${dateArray[0][1]}${dateArray[0][2]}${dateArray[0][3]}`;
  const formattedDate = `${day}/${month}/${year}`;
  const history = useHistory();

  console.log(deliveryAddress,
    deliveryNumber);

  const changePath = () => {
    history.push(`/seller/orders/${id}`);
  };
  return (
    <Card
      onClick={ changePath }
      style={ {
        flexDirection: 'row',
        maxWidth: '400px',
        alignItems: 'center',
        minHeight: '70px',
        justifyContent: 'space-evenly',
      } }
    >
      <div>
        <Card.Text
          style={ { marginBottom: 0 } }
          data-testid={ `seller_orders__element-order-id-${id}` }
        >
          { `Pedido ${id}` }
        </Card.Text>
      </div>
      <div>
        <div style={ { display: 'flex', alignItems: 'center' } }>
          <div>
            <Card.Text
              style={ { marginBottom: 0 } }
              data-testid={ `seller_orders__element-delivery-status-${id}` }
            >
              { status }
            </Card.Text>
          </div>
          <div>
            <Card.Text
              style={ { marginBottom: 0 } }
              data-testid={ `seller_orders__element-order-date-${id}` }
            >
              { formattedDate }
            </Card.Text>
            <Card.Text data-testid={ `seller_orders__element-card-price-${id}` }>
              { `R$${totalPrice.toString().split('.').join(',')}` }
            </Card.Text>
          </div>
        </div>
        <Card.Text style={ { textAlign: 'end' } }>
          <span
            data-testid={ `seller_orders__element-card-address-${id}` }
          >
            { `${deliveryAddress},${deliveryNumber}` }
          </span>
        </Card.Text>
      </div>

    </Card>
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
