import React from 'react';
import Product from './Product';
import './ProductsList.scss';

const TEST_STATUS = 'seller_order_details__element-order-details-label-delivery-status';

function ProductsList() {
  return (
    <div>
      <div className="conteiner border">
        <div className="order-title">
          <span>PEDIDO</span>
          <span
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            id
          </span>
          <span
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            data
          </span>
          <span data-testid={ TEST_STATUS }>
            status
          </span>
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            data-testid="seller_order_details__button-dispatch-check"
          >
            SAIU PARA ENTREGA
          </button>
        </div>
        <table style={ { width: '100%' } }>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitario</th>
            <th>Sub-total</th>
          </tr>
          <tbody>
            <Product index="1" />
            <Product index="2" />
            <Product index="3" />
          </tbody>
        </table>
        <p>
          <span
            data-testid="seller_order_details__element-order-total-price"
          >
            total
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProductsList;
