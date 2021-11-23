import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { Context } from '../context/ContextGlobal';

function CustomerProducts() {
  const { products, setProducts } = useContext(Context);

  const URL = 'http://localhost:3001/all-products';

  useEffect(() => {
    const getAllProducts = async () => {
      const userStorage = localStorage.getItem('user');
      const { data } = await axios.get(URL,
        { headers: { Authorization: JSON.parse(userStorage).token } });
      setProducts(data.map((product) => ({ ...product, quantity: 0 })));
    };

    getAllProducts();
  }, [setProducts]);

  const increase = (id) => {
    setProducts(
      products
        .map((prod) => (prod.id === id
          ? { ...prod, quantity: prod.quantity + 1 } : prod)),
    );
  };

  const decrease = (id, quantity) => {
    if (quantity > 0) {
      setProducts(
        products
          .map((prod) => (prod.id === id
            ? { ...prod, quantity: prod.quantity - 1 } : prod)),
      );
    }
  };

  return (
    <div>
      <NavBar />
      {products.map(({ id, name, url_image: urlImage, price, quantity }) => (
        <div
          key={ id }
        >
          <section>
            <h1
              data-testid={ `customer_products__element-card-title-${id}` }
            >
              { name }
            </h1>
            <h2
              data-testid={ `customer_products__element-card-price-${id}` }
            >
              { price.replace('.', ',') }
            </h2>
            <img
              alt={ name }
              data-testid={ `customer_products__img-card-bg-image-${id}` }
              src={ urlImage }
              style={ { width: '150px' } }
            />
          </section>
          <div>
            <button
              type="button"
              data-testid={ `customer_products__button-card-add-item-${id}` }
              onClick={ () => increase(id) }
            >
              +
            </button>
            <input
              type="text"
              value={ quantity }
              data-testid={ `customer_products__input-card-quantity-${id}` }
            />
            <button
              type="button"
              data-testid={ `customer_products__button-card-rm-item-${id}` }
              onClick={ () => decrease(id, quantity) }
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomerProducts;
