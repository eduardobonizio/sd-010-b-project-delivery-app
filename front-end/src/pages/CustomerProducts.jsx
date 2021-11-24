import { Button, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import getProducts from '../api/getProducts';

import ProductCard from '../components/ProductCard';

const CustomerProducts = () => {
  const [isLoading, setIsloading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [totalValue, setTotalValue] = useState(0);
  const history = useHistory();

  useEffect(() => {
    setIsloading(true);
    getProducts('customer').then((res) => res.data)
      .then((data) => {
        setProducts(data);
      });
    setIsloading(false);
  }, []);

  const setCartCallback = (productName, productPrice, productQuantity) => {
    const obj = { price: productPrice, quantity: productQuantity };
    const oldCart = cart;
    oldCart[productName] = obj;
    setCart(oldCart);
    localStorage.setItem('cart', JSON.stringify(oldCart));
    const total = Object.values(oldCart);
    if (total) {
      setTotalValue(total
        .reduce((soma, object) => (soma + (parseFloat(object.price.replace(',', '.'))
        * object.quantity)), 0));
    }
  };

  return isLoading
    ? <span>Carregando...</span> : (
      <div>
        {products.map(({ name, id, price, url_image: image }) => (<ProductCard
          key={ id }
          id={ id }
          price={ `${price.replace('.', ',')}` }
          image={ image }
          name={ name }
          setCartCallback={ setCartCallback }
        />
        ))}
        <Stack>
          <Button
            data-testid="customer_products__button-cart"
            style={ { position: 'absolute' } }
            variant="contained"
            onClick={ () => history.push('/customer/checkout') }
            disabled={ totalValue <= 0 }
          >
            <div
              data-testid="customer_products__checkout-bottom-value"
            >
              {totalValue.toFixed(2).replace('.', ',')}
            </div>

          </Button>
        </Stack>
      </div>);
};

export default CustomerProducts;
