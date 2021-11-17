import React from 'react';
import NavBar from '../components/NavBar';

function OrderDetails() {
  const status = 'customer_order_details__element-order-details-label-delivery-status';
  return (
    <div>
      <NavBar />
      <h3>Detalhes do Pedido</h3>
      <div className="details-info">
        <p data-testid="customer_order_details__element-order-details-label-order-id">
          PEDIDO [id do pedido];
        </p>
        <p data-testid="customer_order_details__element-order-details-label-seller-name">
          P. Vend: [nome da pessoa]
        </p>
        <p data-testid="customer_order_details__element-order-details-label-order-date">
          [data do pedido]
        </p>
        <p
          data-testid={ status }
        >
          [status do pedido]
        </p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
        >
          Marcar como entrergue
        </button>
      </div>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
        <tr>
          <td
            data-testid="customer_order_details__element-order-table-item-number-"
          >
            1
          </td>
          <td data-testid="customer_order_details__element-order-table-name-">
            Cerveja Stella 250ml
          </td>
          <td data-testid="customer_order_details__element-order-table-quantity-">3</td>
          <td data-testid="customer_order_details__element-order-table-sub-total-">
            R$ 3,50
          </td>
          <td data-testid="customer_order_details__element-order-total-price-">
            R$ 10,50
          </td>
        </tr>
        <tr>
          <td data-testid="customer_checkout__element-order-table-item-number-">2</td>
          <td data-testid="customer_checkout__element-order-table-name-">
            Cerveja Skol Latão 450ml
          </td>
          <td data-testid="cutomer_checkout__element-order-table-quantity-">4</td>
          <td data-testid="customer_checkout__element-order-table-unit-price-">
            R$ 4,10
          </td>
          <td data-testid="customer_checkout__element-order-table-sub-total-">
            R$ 16,40
          </td>
        </tr>
        <tr>
          <td data-testid="customer_checkout__element-order-table-item-number-">3</td>
          <td
            data-testid="customer_checkout__element-order-table-name-"
          >
            Salgadinho Torcida Churrasco
          </td>
          <td data-testid="cutomer_checkout__element-order-table-quantity-">1</td>
          <td data-testid="customer_checkout__element-order-table-unit-price-">
            R$ 1,56
          </td>
          <td data-testid="customer_checkout__element-order-table-sub-total-">
            R$ 1,56
          </td>
        </tr>
      </table>
      <h2 data-testid="customer_checkout__element-order-total-price">
        Total: R$28,46
      </h2>
    </div>
  );
}

export default OrderDetails;
