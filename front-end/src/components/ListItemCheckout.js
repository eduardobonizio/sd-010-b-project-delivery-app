import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../contexts/createContext';
import { getSellers } from '../services/api';

export default function ListItemCheckout() {

  const { products, setProducts, total, setTotal } = useContext(Context);
 const [ productsList, setProductsList ] = useState([])

  // const [total, setTotal] = useState([]);
  const [sellers, setSellers] = useState([]);

  function itemTotal(Valor, Quantity) {
    const result = Valor * Quantity;
    return result;
  }
  useEffect(() => {
    setProductsList(products)
    getSellers()
      .then(({ data }) => {
        data.forEach((seller) => {
          setSellers([...sellers, seller]);
        });
      });
  }, []);

  function orderTotal() {
 return productsList.filter((product) =>product.quant > 0
).reduce((acc, {price})=> acc+parseInt(price),0)
  }

  return (
    <>
      <p>Finalizar Pedido:</p>
      {productsList.filter((product) =>product.quant > 0
      ).map((product, i) => {
        const { id, name, price, quant} = product
        return (
        <ul key={ i }>
          <li>
            <span
              key={ id }
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
              R$ :
              {price}
            </span>
            <span
              className="subtotalPrice"
              data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }
            >
              R$:
              {itemTotal(price, quant)}
            </span>
            <button
              className="removeItem"
              data-testid={ `customer_checkout__element-order-table-remove-${id}` }
              type="submit"
              onClick={ (id) => { products.splice(id, 1, { ...product, quant: 0})
              return setProducts(products);
            }}
            >
              Remover
            </button>
          </li>
        </ul>
      )})}

      <div
        className="orderTotal"
        data-testid="customer_checkout__element-order-total-price"
      >
        Total: R$
    {/* {orderTotal()} */}
    {total}
      </div>
      <form>
        <p>Detalhes e Endereço para Entrega</p>
        <label htmlFor="responsableSeller">
          <p>P. Vendedora Responsável:</p>
          <select>
            { sellers.length > 0 && sellers.map(({ id, name, email }) => (
              <option
                key={ id }
                id={ email }
                value={ name }
                data-testid="customer_checkout__select-seller"
              >
                {' '}
                {name}
                {' '}
              </option>
            ))}
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
