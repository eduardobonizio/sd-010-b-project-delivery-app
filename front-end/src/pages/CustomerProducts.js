import React, { useEffect, useContext } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Context } from '../context/ContextGlobal';

function CustomerProducts() {
  const { products, setProducts, total, setTotal } = useContext(Context);
  const history = useHistory();

  const URL = 'http://localhost:3001/all-products';

  useEffect(() => {
    if (localStorage.getItem('user') === null) {
      const User = [];
      localStorage.setItem('user', JSON.stringify(User));
    }
    if (localStorage.getItem('cart') === null) {
      const Cart = [];
      localStorage.setItem('cart', JSON.stringify(Cart));
    }
  }, []);

  useEffect(() => {
    const getAllProducts = async () => {
      const userStorage = localStorage.getItem('user');
      const { data } = await axios.get(URL,
        { headers: { Authorization: JSON.parse(userStorage).token } });
      setProducts(data.map((product) => ({ ...product, quantity: 0, totalValue: 0.00 })));
    };
    getAllProducts();
  }, [setProducts]);

  const totalProducts = () => {
    const getLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const totalProductss = getLocalStorage
      .map((product) => product.totalValue).reduce((acc, curr) => acc + curr, 0);
    setTotal((parseFloat(totalProductss).toFixed(2)).replace('.', ','));
  };

  const increase = (id) => {
    setProducts(
      products
        .map((prod) => (prod.id === id
          ? { ...prod, quantity: parseInt(prod.quantity, 10) + 1 } : prod)),
    );
    totalProducts();
  };

  const decrease = (id, quantity) => {
    if (quantity > 0) {
      setProducts(
        products
          .map((prod) => (prod.id === id
            ? { ...prod, quantity: prod.quantity - 1 } : prod)),
      );
      totalProducts();
    }
  };

  const changeInputQuantity = (id, quantity) => {
    setProducts(
      products
        .map((prod) => (prod.id === id
          ? { ...prod, quantity } : prod)),
    );
  };

  const addOrRemoveProductFromLocalStorage = (id, quantity, totalValue, price) => {
    if (quantity >= 0) {
      quantity = parseInt(quantity, 10);
      totalValue = parseFloat((quantity * parseFloat(price)).toFixed(2));
      const cart = JSON.parse(localStorage.getItem('cart'));
      const product = products.find((prod) => prod.id === id);
      const productInCart = cart.find((prod) => prod.id === id);

      if (productInCart) {
        if (quantity === 0) {
          cart.splice(cart.indexOf(productInCart), 1);
        } else {
          productInCart.quantity = quantity;
          productInCart.totalValue = totalValue;
        }
      } else {
        cart.push({ ...product, quantity, totalValue });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      return false;
    }
    totalProducts();
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        {products
          .map(({ id, name, url_image: urlImage, price, quantity, totalValue }) => (
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
                  onClick={ () => {
                    increase(id);
                    addOrRemoveProductFromLocalStorage(
                      id, quantity + 1, totalValue, price,
                    );
                  } }
                >
                  +
                </button>
                <input
                  type="number"
                  value={ quantity }
                  onChange={ (e) => {
                    changeInputQuantity(id, e.target.value);
                    addOrRemoveProductFromLocalStorage(
                      id, parseInt(e.target.value, 10), totalValue, price,
                    );
                  } }
                  data-testid={ `customer_products__input-card-quantity-${id}` }
                />
                <button
                  type="button"
                  data-testid={ `customer_products__button-card-rm-item-${id}` }
                  onClick={ () => {
                    decrease(id, quantity);
                    addOrRemoveProductFromLocalStorage(
                      id, quantity - 1, totalValue, price,
                    );
                  } }
                >
                  -
                </button>
              </div>
            </Card>
          ))}
      </div>
      <button
        onClick={ () => history.push('/customer/checkout') }
        data-testid="customer_products__button-cart"
        disabled={ total === 0 }
        type="button"
      >
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          { `Total: R$ ${total}` }

        </span>
      </button>
    </div>
  );
}

export default CustomerProducts;
