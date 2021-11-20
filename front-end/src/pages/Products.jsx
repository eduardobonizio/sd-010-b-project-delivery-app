import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopBar from '../components/TopBar';
import ProductCard from '../components/ProductCard';
import CartTotal from '../components/CartTotal';
import './css/Products.css';

function Products() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const [cart, setCart] = useState();
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('http://localhost:3001/products');
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
      <div className="products-container">
        {
          cart && cart.map((product) => (
            <ProductCard
              key={ product.key }
              product={ product }
              setCart={ setCart }
              cart={ cart }
            />
          ))
        }
      </div>
      <CartTotal cartTotal={ cartTotal } />
    </>
  );
}

export default Products;
