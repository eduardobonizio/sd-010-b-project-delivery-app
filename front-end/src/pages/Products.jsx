import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Cards from '../components/Cards';
import ShoppingCart from '../components/ShoppingCart';
import DeliveryContext from '../context/DeliveryContext';
import '../styles/Card.css';
import { getAllProduct } from '../services/API';

function Products() {
  const [products, setProducts] = useState([]);
  const { totalSales } = useContext(DeliveryContext);
  const navigate = useNavigate();

  useEffect(() => {
    const { token } = JSON.parse(localStorage.user);
    const execute = async () => {
      try {
        const data = await getAllProduct(token);
        localStorage.setItem('carrinho', JSON.stringify([]));
        setProducts(data);
      } catch (error) {
        return error;
      }
    };
    execute();
    // const { token } = JSON.parse(localStorage.user);
    // const endPoint = 'http://localhost:3001/products';
    // axios.get(endPoint, { headers: { Authorization: token } }).then((res) => {
    //   const resp = res.data;
    //   setProducts(resp);
    // });
  }, []);

  return (
    <div className="div-main">
      <Header userRole="customer" />
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
