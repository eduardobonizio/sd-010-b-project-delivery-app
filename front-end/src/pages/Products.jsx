import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import TopBar from '../components/TopBar';
import ProductCard from '../components/ProductCard';
import CartTotal from '../components/CartTotal';
import { serverUrl } from '../helpers/constants';

function Products() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const [cart, setCart] = useState();
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(`${serverUrl}/products`);
      const productsWithQuantity = response.data.map((e) => {
        e.quantity = 0;
        return e;
      });
      setCart(productsWithQuantity);
    };
    getProducts();
  }, []);

  useEffect(() => {
    let sum = 0;
    localStorage.setItem('cart', JSON.stringify(cart));
    if (cart) {
      cart.forEach((element) => {
        sum += element.price * element.quantity;
      });
    }
    setCartTotal(sum);
  }, [cart]);

  return (
    <>
      <TopBar name={ name } />
      <Container>
        {
          cart && cart.map((product, index) => (
            <ProductCard
              product={ product }
              setCart={ setCart }
              cart={ cart }
              key={ index }
            />
          ))
        }
      </Container>
      <CartTotal cartTotal={ cartTotal } />
    </>
  );
}

export default Products;
