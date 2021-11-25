import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import ProductCard from '../components/productCard';
import getProducts from '../services/products';

function Products() {
  const [userObj, setUserObj] = useState({});
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState('0,00');

  useEffect(async () => {
    const userInfo = localStorage.getItem('user');
    const fetchProducts = await getProducts();
    const productsData = fetchProducts.data;

    setSubtotal('0,00');
    setProducts(productsData);
    setUserObj(JSON.parse(userInfo));
    // console.log(userObj);
  }, []);

  const { name } = userObj;

  return (
    <div className="main-products-div">
      <Navbar name={ name } products="Produtos" orders="Pedidos" />
      <div className="products-cards-div">
        { products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
            setSubtotal={ setSubtotal }
          />))}
      </div>
      <div className="cart-div">
        <button
          className="cart-button"
          disabled={ subtotal === '0,00' }
          type="button"
          data-testid="customer_products__button-cart"
        >
          <Link to="/customer/checkout" className="cart-text">
            <p
              data-testid="customer_products__checkout-bottom-value"
              className="cart-text"
            >
              { `🛒 ver carrinho R$ ${subtotal}` }

            </p>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Products;
