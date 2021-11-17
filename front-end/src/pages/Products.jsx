import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Cards from '../components/Cards';
import '../styles/Card.css';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify([]));
    axios.get('http://localhost:3001/products').then((res) => {
      const resp = res.data;
      setProducts(resp);
    });
  }, []);

  return (
    <div className="div-main">
      <Header />
      <main>
        {products.map((product) => <Cards key={ product.id } values={ product } />)}
      </main>
    </div>
  );
}

export default Products;
