import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../contexts/createContext';
import { checkoutProducts, getSellers } from '../services/api';

export default function ListItemCheckout() {
  const { products, setProducts, total, setTotal } = useContext(Context);
  const [productsList, setProductsList] = useState([]);

  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState({ address: '', number: 0 });
  const [sellersId, setSellersId] = useState(0);
  const history = useHistory();

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

  function getinfo({ target: { name, value } }) {
    if (name === 'address') {
      return setAddress({ ...address, address: value });
    }
    if (name === 'sellers') {
      return setSellersId(value);
    }
    return setAddress({ ...address, number: value });
  }

  async function getorder(
    productsOrder,
    totalPrice,
    deliveryAddress,
    sellerId,
  ) {
    const cart = productsOrder.map(
      ({ id, quant }) => ({ productId: id, quantity: quant }),
    );

    const objectOrder = {
      sale: {
        sellerId,
        totalPrice,
        deliveryAddress: deliveryAddress.address,
        deliveryNumber: deliveryAddress.number,
      },
      cart,

    };
    console.log(objectOrder);
    const { data } = await checkoutProducts(objectOrder);
    console.log('idOrder', data);
    return history.push(`localhost:3000/customer/orders/${data[0].saleId}`);
  }

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
      <form
        onSubmit={ (event) => event.preventDefault() }
      >
        <p>Detalhes e Endereço para Entrega</p>
        <label htmlFor="responsableSeller">
          <p>P. Vendedora Responsável:</p>
          <select
            name="sellers"
            data-testid="customer_checkout__select-seller"
            onChange={ getinfo }
          >
            <option selected> - </option>
            { sellers.length > 0 && sellers.map(({ id, name, email }) => (
              <option
                key={ email }
                id={ id }
                value={ id }

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
            name="address"
            type="text"
            data-testid="customer_checkout__input-address"
            onChange={ getinfo }
          />
        </label>
        <label htmlFor="addressNumber">
          <p>Número</p>
          <input
            id="addressNumber"
            name="addressNumber"
            type="text"
            data-testid="customer_checkout__input-addressNumber"
            onChange={ getinfo }
          />
        </label>
        <button
          className="submit-order"
          data-testid="customer_checkout__button-submit-order"
          type="submit"
          onClick={ () => getorder(productsList, total, address, sellersId) }
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </>
  );
}
