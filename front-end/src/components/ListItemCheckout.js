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
  }, []);

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
                data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
              >
                {i}
              </span>
              <span
                className="itemName"
                data-testid={ `customer_checkout__element-order-table-name-${id}` }
              >
                {name}
              </span>
              <span
                className="itemQuantity"
                data-testid={ `customer_checkout__element-order-table-quantity-${id}` }
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
        Total: R$
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
          onClick={ () => console.log('mandou') }
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </>
  );
}
