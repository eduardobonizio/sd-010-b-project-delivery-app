import { Button, Stack } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import getProducts from '../api/getProducts';

import ProductCard from '../components/ProductCard';

import ProductsContext from '../context/Products/ProductsContext';

const CustomerProducts = () => {
  const [isLoading, setIsloading] = useState(false);
  const [products, setProducts] = useState([]);
  const history = useHistory();

  const {
    totalPrice: totalPriceContext,
    setTotalPrice: setTotalPriceContext,
  } = useContext(ProductsContext);

  useEffect(() => {
    setIsloading(true);
    getProducts('customer').then((res) => res.data)
      .then((data) => {
        setProducts(data);
      });
    setIsloading(false);
  }, []);

  const calculateTotalPrice = (productsLS) => {
    const totalPrice = Array.isArray(productsLS) ? productsLS.reduce(
      (sum, { quantity, unitPrice }) => (
        sum + quantity * parseFloat(unitPrice.replace(',', '.'))), 0,
    ) : 0;

    setTotalPriceContext(totalPrice);
    return totalPrice;
  };

  const setCartCallback = (productId, productName, productPrice, productQuantity) => {
    let cartLS = JSON.parse(localStorage.getItem('customerCart'));
    const hasSomeProduct = cartLS.some((product) => product.id === productId);
    if (!hasSomeProduct) {
      cartLS.push({
        id: productId,
        description: productName,
        quantity: productQuantity,
        unitPrice: productPrice,
      });
    } else {
      cartLS = cartLS.map((product) => {
        if (product.id === productId) {
          product.quantity = productQuantity;
        }
        return product;
      });
    }

    cartLS = cartLS.filter((product) => product.quantity !== 0);

    localStorage.setItem('customerCart', JSON.stringify(cartLS));
    const total = calculateTotalPrice(cartLS);
    console.log(total);
    setTotalPriceContext(total);
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
            disabled={ totalPriceContext <= 0 }
          >
            <div
              data-testid="customer_products__checkout-bottom-value"
            >
              {totalPriceContext.toFixed(2).replace('.', ',')}
            </div>

          </Button>
        </Stack>
      </div>);
};

export default CustomerProducts;
