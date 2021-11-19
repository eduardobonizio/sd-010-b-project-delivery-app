import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Cards from '../components/Cards';
import ShoppingCart from '../components/ShoppingCart';
import DeliveryContext from '../context/DeliveryContext';
import '../styles/Card.css';

function Products() {
  const [products, setProducts] = useState([]);
  const { totalSales } = useContext(DeliveryContext);
  const navigate = useNavigate();

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
        {products.map((product) => (<Cards
          key={ product.id }
          values={ product }
        />))}
        <ShoppingCart totalSales={ totalSales } navigate={ navigate } />
      </main>
    </div>
  );
}

export default Products;
