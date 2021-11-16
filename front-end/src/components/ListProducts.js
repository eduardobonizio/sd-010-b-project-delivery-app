import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getProducts } from '../services/api';
import { getStorage } from '../utils/localStorage';

export default function ListProducts() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const history = useHistory();

  function setQuantityItems(target, product) {
    const { price, quant } = product;
    console.log(quant);
    if (target.innerText === '-' && quant > 0) {
      const indexProduct = products.indexOf(product);
      products.splice(indexProduct, 1, { ...product, quant: quant - 1 });
      setTotal(total - price);
      return setProducts(products);
    }
    if (target.innerText === '+') {
      const indexProduct = products.indexOf(product);
      products.splice(indexProduct, 1, { ...product, quant: quant + 1 });
      setTotal(total + price);
      setProducts(products);
    }
    return 0;
  }

  useEffect(() => {
    if (!getStorage('user')) { history.push('/login'); }
    getProducts().then(({ data }) => {
      const newObj = data.map((item) => ({ ...item, quant: 0 }));
      setProducts(newObj);
    })
      .catch((err) => { console.log(err); });
  }, [history]);

  return (
    <>
      <h3>Products</h3>

      {products && products.map((product) => (
        <section
          key={ product.id }
          data-testid={ `customer_products__element-card-price-${product.id}` }
        >
          <img
            src={ product.urlImage }
            alt={ product.name }
            style={ { width: '5rem' } }
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          />
          <span data-testid={ `customer_products__element-card-title-${product.id}` }>
            {product.name}
          </span>
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
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
          />

          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            onClick={ ({ target }) => setQuantityItems(target, product) }
          >
            +
          </button>

          <li>{product.price}</li>
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
