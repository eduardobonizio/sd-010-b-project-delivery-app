import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getProducts } from '../services/api';
import { getStorage } from '../utils/localStorage';

export default function ListProducts() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const history = useHistory();

  function setQuantityItems(target, price) {
    if (target.innerText === '-' && quantity > 0) {
      setTotal(total - price);
      return setQuantity(quantity - 1);
    }
    if (target.innerText === '+') {
      setTotal(total + price);
      return setQuantity(quantity + 1);
    }
    return 0;
  }

  useEffect(() => {
    if (!getStorage('user')) { history.push('/login'); }
    getProducts().then(({ data }) => setProducts(data))
      .catch((err) => { console.log(err); });
  }, [history]);

  return (
    <>
      <h3>Products</h3>

      {products && products.map(({ id, name, price, urlImage }) => (
        <section key={ id } data-testid={ `customer_products__element-card-price-${id}` }>

          <img
            src={ urlImage }
            alt={ name }
            style={ { width: '5rem' } }
            data-testid={ `customer_products__img-card-bg-image-${id}` }
          />
          <span data-testid={ `customer_products__element-card-title-${id}` }>
            {name}
          </span>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ ({ target }) => setQuantityItems(target, price) }
          >
            -
          </button>
          <input
            type="number"
            value={ quantity }
            min="0"
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />

          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ ({ target }) => setQuantityItems(target, price) }
          >
            +
          </button>

          <li>{price}</li>
        </section>

      ))}
      <h2>
        Preço total é:
        {' '}
        { total }
      </h2>
    </>

  );
}
