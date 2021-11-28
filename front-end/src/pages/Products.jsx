import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import TopBar from '../components/TopBar';
import ProductCard from '../components/ProductCard';
import { serverUrl } from '../helpers/constants';

function Products() {
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
      <TopBar cartTotal={ cartTotal } />
      <Container>
        <Row xs={ 2 } md={ 3 } sm={ 2 } className="g-4">
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
        </Row>
      </Container>
    </>
  );
}

export default Products;
