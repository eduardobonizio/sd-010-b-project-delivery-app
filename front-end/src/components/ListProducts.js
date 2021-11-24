import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../contexts/createContext';
import { getProducts } from '../services/api';
// import { getStorage } from '../utils/localStorage';

export default function ListProducts() {
  const { products, setProducts, total, setTotal } = useContext(Context);
  const history = useHistory();

  function setQuantityItems(target, product) {
    const { price, quant } = product;
    const priceNumber = parseFloat(price);
    const indexProduct = products.findIndex(({ id }) => id === product.id);
    if (target.innerText === '-' && quant > 0) {
      const valorFinal = parseFloat((total - priceNumber).toFixed(2));
      products.splice(indexProduct, 1, { ...product, quant: quant - 1 });
      setTotal(valorFinal);
      return setProducts(products);
    }
    if (target.innerText === '+') {
      const valorFinal = parseFloat((priceNumber + total).toFixed(2));
      products.splice(indexProduct, 1, { ...product, quant: quant + 1 });
      setTotal(valorFinal);
      return setProducts(products);
    }
    const quantidade = target.value.length !== 0 ? parseFloat(target.value) : 0;
    const valorFinal = quantidade * priceNumber;
    products.splice(indexProduct, 1, { ...product, quant: quantidade });
    setTotal(parseFloat((valorFinal + total).toFixed(2)));
    return setProducts(products);
  }

  useEffect(() => {
    // if (!getStorage('user')) { history.push('/login'); }
    getProducts().then(({ data }) => {
      const newObj = data.map((item) => ({ ...item, quant: 0 }));
      setProducts(newObj);
    })
      .catch((err) => { console.log(err); });
  }, [setProducts]);

  return (
    <>
      <h3>Products</h3>

      {products && products.map((product) => (
        <section key={ product.id }>
          <img
            src={ product.urlImage }
            alt={ product.name }
            style={ { width: '5rem' } }
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          />
          <section>
            <span data-testid={ `customer_products__element-card-title-${product.id}` }>
              {product.name}
            </span>
          </section>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            onClick={ ({ target }) => setQuantityItems(target, product) }
          >
            -
          </button>
          <input
            type="number"
            value={ product.quant }
            min="0"
            onChange={ ({ target }) => setQuantityItems(target, product) }
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
          />

          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            onClick={ ({ target }) => setQuantityItems(target, product) }
          >
            +
          </button>
          <li
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            {product.price.replace(/\./g, ',')}

          </li>
        </section>

      ))}
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => history.push('/customer/checkout') }
        disabled={ total < 1 }
      >
        Ver no carrinho:
        {' '}
        <span data-testid="customer_products__checkout-bottom-value">
          {total.toFixed(2).replace(/\./g, ',')}
        </span>
      </button>
    </>

  );
}
