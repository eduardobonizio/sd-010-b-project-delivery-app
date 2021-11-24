import React, { useState, useEffect } from 'react';
import getProducts from '../api/getProducts';

import ProductCard from '../components/ProductCard';

const CustomerProducts = () => {
  const [isLoading, setIsloading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [totalValue, setTotalValue] = useState(0);

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
    console.log(totalValue);
  };

  // useEffect(() => {
  //   console.log('totalValue');
  // }, [cart]);

  return isLoading
    ? <span>Carregando...</span> : (
      <div>
        <span>{totalValue}</span>
        {products.map(({ name, id, price, url_image: image }) => (<ProductCard
          key={ id }
          id={ id }
          price={ `${price.replace('.', ',')}` }
          image={ image }
          name={ name }
          setCartCallback={ setCartCallback }
        />
        ))}
        {/* <button
          type="button"
          onClick={ () => console
            .log(Object.values(cart)
              .map((obj) => parseFloat(obj.price.replace(',', '.')) * obj.quantity)) }
        >
          log

        </button> */}
      </div>);
};

export default CustomerProducts;
