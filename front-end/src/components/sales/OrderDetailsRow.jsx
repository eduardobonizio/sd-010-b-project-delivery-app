import React from 'react';
import PropTypes from 'prop-types';
import { Description, Item, Quantity, Row,
  SubTotal, Total, UnitPrice } from '../../styles/orderDetails';

const OrderDetailsRow = ({ products }) => {
  let subTotal = 0;
  let total = 0;
  return (
    <div>
      <Row>
        <Item>Item</Item>
        <Description>Descrição</Description>
        <Quantity>Quantidade</Quantity>
        <UnitPrice>Valor Unitário</UnitPrice>
        <SubTotal>Sub-total</SubTotal>
      </Row>
      {products.map((product, i) => {
        subTotal = product.saleProduct.quantity * product.price;
        total += subTotal;
        return (
          <Row key={ `${i}${product.id}` }>
            <Item
              data-testid={ `seller_order_details__element-order-table-item-number-${i}` }
            >
              { i + 1 }
            </Item>
            <Description
              data-testid={ `seller_order_details__element-order-table-name-${i}` }
            >
              { product.name }
            </Description>
            <Quantity
              data-testid={ `seller_order_details__element-order-table-quantity-${i}` }
            >
              { product.saleProduct.quantity }
            </Quantity>
            <UnitPrice
              data-testid={ `seller_order_details__element-order-table-unit-price-${i}` }
            >
              { `R$ ${product.price}` }
            </UnitPrice>
            <SubTotal
              data-testid={ `seller_order_details__element-order-table-sub-total-${i}` }
            >
              { `R$ ${subTotal.toFixed(2)}` }
            </SubTotal>
          </Row>
        );
      })}
      <Total data-testid="seller_order_details__element-order-total-price">
        {`Total: R$${total.toFixed(2)}`}
      </Total>
    </div>
  );
};

OrderDetailsRow.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OrderDetailsRow;
