import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, CardContainerLeft, CardContainerRight,
  CardContainerRightTop,
  CardContainerRightTopLeft } from '../../styles/orders';

const DIGITS = -4;

const OrderCard = ({ order: {
  id,
  status,
  sale_date: date,
  total_price: price,
  delivery_address: address,
  delivery_number: number,
} }) => (
  <CardContainer>
    <CardContainerLeft>
      <div>Pedido</div>
      {/* 1 */}
      <div data-testid={ `seller_orders__element-order-id-${id}` }>{`000${id}`.slice(DIGITS)}</div>
    </CardContainerLeft>
    <CardContainerRight>
      <CardContainerRightTop>
        <CardContainerRightTopLeft
          data-testid={ `seller_orders__element-delivery-status-${id}` }
        >
          {status}
        </CardContainerRightTopLeft>
        <div>
          <div data-testid={ `seller_orders__element-order-date-${id}` }>
            {date.split('T')[0]}
          </div>
          <div data-testid={ `seller_orders__element-card-price-${id}` }>
            {`R$ ${price}`}
          </div>
        </div>
      </CardContainerRightTop>
      <div data-testid={ `seller_orders__element-card-address-${id}` }>
        {`${address}, ${number}`}
      </div>
    </CardContainerRight>
  </CardContainer>
);

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    sale_date: PropTypes.string.isRequired,
    total_price: PropTypes.string.isRequired,
    delivery_address: PropTypes.string.isRequired,
    delivery_number: PropTypes.string.isRequired }).isRequired,
};

export default OrderCard;

// https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript
