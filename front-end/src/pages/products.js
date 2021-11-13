import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import ProductCard from '../components/productCard';
import getProducts from '../services/products';

function Products() {
  const [userObj, setUserObj] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const userInfo = localStorage.getItem('user');
    const fetchProducts = await getProducts();
    const productsData = fetchProducts.data;

    setProducts(productsData);
    setUserObj(JSON.parse(userInfo));
    console.log(userObj);
  }, []);

  const { name } = userObj;

  return (
    <div>
      <Navbar name={ name } products="Produtos" orders="Pedidos" />
      { products.map((product) => (
        <ProductCard key={ product.id } product={ product } />))}
    </div>
  );
}

export default Products;
