import React from 'react';

export default function ListItemCheckout() {
  const userCheckout = [
    { id: 1, name: 'Skol Lata 250ml', price: '2.20', quant: 2 },
    { id: 2, name: 'Heineken 600ml', price: '7.50', quant: 3 },
    { id: 3, name: 'Antarctica Pilsen 300ml', price: '2.49', quant: 1 },
    { id: 4, name: 'Brahma 600ml', price: '7.50', quant: 2 },
  ];

  // const [total, settotal] = useState([]);

  function itemTotal(Valor, Quantity) {
    const result = Valor * Quantity;
    return result;
  }

  function orderTotal() {

  }

  return (
    <>
      <p>Finalizar Pedido:</p>
      {userCheckout.map(({ id, name, price, quant }, i) => (
        <ul key={ i }>
          <li>
            <span
              className="itemId"
              data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
            >
              {id}
            </span>
            <span
              className="itemName"
              data-testid={ `customer_checkout__element-order-table-name-${id}` }
            >
              {name}
            </span>
            <span
              className="itemQuantity"
              data-testid={ `cutomer_checkout__element-order-table-quantity-${id}` }
            >
              {quant}
            </span>
            <span
              className="unitPrice"
              data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }
            >
              R$:
              {price}
            </span>
            <span
              className="subtotalPrice"
              data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }
            >
              R$:
              {itemTotal(price, quant)}
            </span>
            <span
              className="subtotalPrice"
              data-testid={ `customer_checkout__element-order-table-remove-${id}` }
            >
              Remover
            </span>
          </li>
        </ul>
      ))}

      <div
        className="orderTotal"
        data-testid="customer_checkout__element-order-total-price"
      >
        Total: R$
        {' '}
        {orderTotal()}
      </div>
      <form>
        <p>Detalhes e Endereço para Entrega</p>
        <label htmlFor="responsableSeller">
          <p>P. Vendedora Responsável:</p>
          <select>
            <option data-testid="customer_checkout__select-seller"> Eu </option>
          </select>
        </label>
        <label htmlFor="address">
          <p>Endereço</p>
          <input
            id="address"
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="addressNumber">
          <p>Número</p>
          <input
            id="addressNumber"
            data-testid="customer_checkout__input-addressNumber"
          />
        </label>
        <button
          className="submit-order"
          data-testid="customer_checkout__button-submit-order"
          type="submit"
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </>
  );
}
