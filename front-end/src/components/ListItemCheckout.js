import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../contexts/createContext';
import { getSellers } from '../services/api';

export default function ListItemCheckout() {
  const { products, setProducts, total, setTotal } = useContext(Context);
  const [productsList, setProductsList] = useState([]);

  const [sellers, setSellers] = useState([]);

  function itemTotal(Valor, Quantity) {
    const result = Valor * Quantity;
    return result;
  }

  useEffect(() => {
    getSellers()
      .then(({ data }) => {
        data.forEach((seller) => {
          setSellers([...sellers, seller]);
        });
      });
  }, [sellers]);

  useEffect(() => {
    setProductsList(products.filter(({ quant }) => quant > 0));
  }, [products]);

  // function orderTotal() {
  //   return productsList.filter((product) => product.quant > 0)
  //     .reduce((acc, { price }) => acc + parseInt(price), 0);
  // }

  return (
    <>
      <p>Finalizar Pedido:</p>
      <ul>
        <li>
          <span>
            Item
          </span>
          <span>
            Descrição
          </span>
          <span>
            Quantidade
          </span>
          <span>
            Valor Unitário
          </span>
          <span>
            Sub-Total
          </span>
          <span>
            Remover Item
          </span>
        </li>
      </ul>
      {productsList.map((product, i) => {
        const { id, name, price, quant } = product;
        return (
          <ul key={ id }>
            <li>
              <span
                key={ id }
                className="itemId"
                data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
              >
                {i + 1}
              </span>
              <span
                className="itemName"
                data-testid={ `customer_checkout__element-order-table-name-${i}` }
              >
                {name}
              </span>
              <span
                className="itemQuantity"
                data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
              >
                {quant}
              </span>
              <span
                className="unitPrice"
                data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
              >
                {price.replace(/\./g, ',')}
              </span>
              <span
                className="subtotalPrice"
                data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
              >
                {itemTotal(price, quant).toFixed(2).replace(/\./g, ',')}
              </span>
              <button
                className="removeItem"
                data-testid={ `customer_checkout__element-order-table-remove-${i}` }
                type="submit"
                onClick={ () => {
                  const valorFinal = itemTotal(product.price, product.quant);
                  setTotal(total - valorFinal);
                  const newProduct = products.map((element) => (
                    element === product ? { ...element, quant: 0 } : element));
                  setProducts(newProduct);
                } }
              >
                Remover
              </button>
            </li>
          </ul>
        );
      })}

      <div
        className="orderTotal"
        data-testid="customer_checkout__element-order-total-price"
      >
        Total:
        {total.toFixed(2).replace(/\./g, ',')}
      </div>
      <form>
        <p>Detalhes e Endereço para Entrega</p>
        <label htmlFor="responsableSeller">
          <p>P. Vendedora Responsável:</p>
          <select data-testid="customer_checkout__select-seller">
            { sellers.length > 0 && sellers.map(({ id, name, email }) => (
              <option
                key={ id }
                id={ email }
                value={ name }
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
          onClick={ () => console.log('mandou') }
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </>
  );
}
