import React, { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import ProductCard from '../components/ProductCard';
import CartTotal from '../components/CartTotal';
import './css/Products.css';

function Products() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const [cart, setCart] = useState();
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const getLocalStorageCartItens = async () => {
      const localCart = JSON.parse(localStorage.getItem('cart'));
      const olyItensInCart = localCart.filter((e) => e.quantity > 0);
      setCart(olyItensInCart);
    };
    getLocalStorageCartItens();
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