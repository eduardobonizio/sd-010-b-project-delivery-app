import React, { useEffect, useState } from 'react';
import CheckoutList from '../components/CheckoutList';
import NavBar from '../components/NavBar';

function Checkout() {
  const pedidos = [
    { id: 1, name: 'Cerveja Stella 250ml', qty: 3, price: 3.5, total: 10.5 },
    { id: 2, name: 'Cerveja Skol Latão 450ml', qty: 4, price: 4.1, total: 16.4 },
    { id: 3, name: 'Salgadinho Torcida Churrasco', qty: 1, price: 1.56, total: 1.56 },
  ];

  const [total, setTotal] = useState();

  const renderList = () => pedidos.map((item, index) => (
    <tr key={ index }>
      <CheckoutList item={ item } />
      <button
        type="button"
        data-testid={ `customer_checkout__element-order-table-remove-${item.id}` }
        onClick={ ({ target }) => {
          target.parentNode.remove();
          pedidos.splice(index, 1);
          console.log(pedidos, index);
        } }
      >
        Remover
      </button>
    </tr>
  ));
  useEffect(() => {
    const sumTotal = () => pedidos
      .map((item) => item.total)
      .reduce((acc, curr) => acc + curr, 0);
    const priceTotal = sumTotal();
    setTotal(priceTotal);
  }, [pedidos]);

  console.log(pedidos);

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
        { renderList() }
      </table>
      <h2 data-testid="customer_checkout__element-order-total-price">
        R$
        { total }
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
