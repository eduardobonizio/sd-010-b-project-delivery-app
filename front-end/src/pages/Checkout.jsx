import React from 'react';
import NavBar from '../components/NavBar';

function Checkout() {
  return (
    <div>
      <NavBar />
      <h3>Finalizar Pedido</h3>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
        <tr>
          <td data-testid="customer_checkout__element-order-table-item-number-">1</td>
          <td data-testid="customer_checkout__element-order-table-name-">
            Cerveja Stella 250ml
          </td>
          <td data-testid="cutomer_checkout__element-order-table-quantity-">3</td>
          <td data-testid="customer_checkout__element-order-table-unit-price-">
            R$ 3,50
          </td>
          <td data-testid="customer_checkout__element-order-table-sub-total-">
            R$ 10,50
          </td>
          <button
            type="button"
            data-testid="customer_checkout__element-order-table-remove-"
          >
            Remover
          </button>
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
          <button
            type="button"
            data-testid="customer_checkout__element-order-table-remove-"
          >
            Remover
          </button>
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
          <button
            type="button"
            data-testid="customer_checkout__element-order-table-remove-"
          >
            Remover
          </button>
        </tr>
      </table>
      <h2 data-testid="customer_checkout__element-order-total-price">
        Total: R$28,46
      </h2>
      <h3>Detalhes e Endereço para Entrega</h3>
      <table>
        <tr>
          <th>P. Vendedora Responsável:</th>
          <th>Endereço:</th>
          <th>Número:</th>
        </tr>
        <tr>
          <select
            name="seller"
            id="seller"
            data-testid="customer_checkout__select-seller"
          >
            <option value="">Fulana de Tal</option>
            <option value="">Fulano de Souza</option>
          </select>
          <td>
            <input
              type="text"
              placeholder="Alguma rua, algum bairro"
              data-testid="customer_checkout__input-address"
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="123"
              data-testid="customer_checkout__input-addressNumber"
            />
          </td>
        </tr>
      </table>
      <button type="button" data-testid="customer_checkout__button-submit-order">
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}

export default Checkout;
