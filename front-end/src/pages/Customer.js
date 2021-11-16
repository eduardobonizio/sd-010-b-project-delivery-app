import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar';
import ProductCard from '../components/ProductCard';

export default function Customer() {
  const [products, setProducts] = useState([]);

  const fetchDrinks = async () => {
    try {
      const response = await fetch('http://localhost:3001/products');
      const drinks = await response.json();
      setProducts(drinks);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify({}));
    fetchDrinks();
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        { products ? products.map((item) => (
          <ProductCard key={ item } product={ item } />
        )) : <h1>loading</h1>}
      </div>
    </div>
  );
}
