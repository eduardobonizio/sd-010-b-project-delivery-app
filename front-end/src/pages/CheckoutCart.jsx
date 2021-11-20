import React, { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import ProductCard from '../components/ProductCard';
import CartTotal from '../components/CartTotal';
import './css/Products.css';

function CheckoutCart() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState();
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const getLocalStorageCartItens = async () => {
      const localCart = JSON.parse(localStorage.getItem('cart'));
      setProducts(localCart);
    };
    getLocalStorageCartItens();
  }, []);

  useEffect(() => {
    const emptyCart = {};
    products.forEach((product) => {
      emptyCart[product.id] = {
        price: parseFloat(product.price),
        quantity: 0,
      };
    });
    setCart(emptyCart);
  }, [products]);

  useEffect(() => {
    let sum = 0;
    localStorage.setItem('cart', JSON.stringify(cart));
    if (cart) {
      Object.entries(cart).forEach((element) => {
        sum += element[1].price * element[1].quantity;
      });
    }
    setCartTotal(sum);
  }, [cart]);

  return (
    <>
      <TopBar name={ name } />
      <div className="products-container">
        { products.map((product) => (<ProductCard
          key={ product.id }
          id={ product.id }
          name={ product.name }
          price={ product.price }
          urlImage={ product.urlImage }
          setCart={ setCart }
          cart={ cart }
        />))}
      </div>
      <CartTotal cartTotal={ cartTotal } />
    </>
  );
}

export default CheckoutCart;
