import React, { useEffect, useContext } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { Context } from '../context/ContextGlobal';

function CustomerProducts() {
  const { products, setProducts } = useContext(Context);

  const URL = 'http://localhost:3001/all-products';

  useEffect(() => {
    if (localStorage.getItem('user') === null) {
      const User = [];
      localStorage.setItem('user', JSON.stringify(User));
    }
    if (localStorage.getItem('products') === null) {
      const Products = [];
      localStorage.setItem('products', JSON.stringify(Products));
    }
  }, []);

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
        <Card style={ { width: '18rem', height: '18rem' } } key={ id }>
          <Card.Body>
            <Card.Title
              data-testid={ `customer_products__element-card-title-${id}` }
            >
              { name }
            </Card.Title>
            <Card.Text
              data-testid={ `customer_products__element-card-price-${id}` }
            >
              { price.replace('.', ',') }
            </Card.Text>
            <Card.Img
              data-testid={ `customer_products__img-card-bg-image-${id}` }
              src={ urlImage }
            />
          </Card.Body>
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
        </Card>
      ))}
    </div>
  );
}

export default CustomerProducts;
