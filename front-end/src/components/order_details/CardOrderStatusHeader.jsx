import React from 'react';
import Proptypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import './css/OrderDetailsTable.css';

function CardOrderStatusHeader({ updateButtonsText, orderId,
  sellerName, orderStatus, saleDate }) {
  const endArraySlice = 4;
  const dateArray = saleDate.split('-');
  const day = `${dateArray[2][0]}${dateArray[2][1]}`;
  const month = `${dateArray[1][0]}${dateArray[1][1]}`;
  const year = `${dateArray[0].slice(0, endArraySlice)}`;
  const formattedDate = `${day}/${month}/${year}`;
  const label = 'customer_order_details__element-order-details-label-delivery-status';
  const tyTrybe = 'customer_order_details__element-order-details-label-seller-name';
  const s2BigNames = 'customer_order_details__element-order-details-label-order-date';

  return (
    <Card>
      <Card.Body>
        <Card.Text
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          { `Pedido ${orderId}` }
        </Card.Text>
        <Card.Text data-testid={ tyTrybe }>
          { `P. Vend: ${sellerName}` }
        </Card.Text>
        <Card.Text data-testid={ s2BigNames }>
          { formattedDate }
        </Card.Text>
        <Card.Text data-testid={ label }>
          { orderStatus }
        </Card.Text>
        <Card.Text />
        <Button
          type="button"
          disabled={ orderStatus !== 'Em Trânsito' }
          onClick={ () => updateButtonsText('Entregue') }
        >
          MARCAR COMO ENTREGUE
        </Button>
      </Card.Body>
    </Card>
  );
}

CardOrderStatusHeader.propTypes = {
  updateButtonsText: Proptypes.func.isRequired,
  orderId: Proptypes.number.isRequired,
  sellerName: Proptypes.string.isRequired,
  orderStatus: Proptypes.string.isRequired,
  saleDate: Proptypes.string.isRequired,
};

export default CardOrderStatusHeader;
