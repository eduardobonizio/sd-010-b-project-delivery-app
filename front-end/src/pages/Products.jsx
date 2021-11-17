import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Cards from '../components/Cards';
import ShoppingCart from '../components/ShoppingCart';
import DeliveryContext from '../context/DeliveryContext';
import '../styles/Card.css';

function Products() {
  const [products, setProducts] = useState([]);
  const { totalSales } = useContext(DeliveryContext);

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify([]));
    axios.get('http://localhost:3001/products').then((res) => {
      const resp = res.data;
      setProducts(resp);
    });
  }, []);

  /* const totalSalesProduct = () => {
    const productStore = JSON.parse(localStorage.getItem('carrinho'));
    console.log(totalSales);
    if (productStore.length > 0) {
      const totalSum = productStore
        .reduce((prev, curr) => prev.subTotal + curr.subTotal);
      setTotalSales(totalSum);
    }
  }; */

  /*  useEffect(() => {
    totalSalesProduct();
    setRefrex(0);
  }, [refrex]); */

  return (
    <div className="div-main">
      <Header />
      <main>
        {products.map((product) => (<Cards
          key={ product.id }
          values={ product }
        />))}
        <ShoppingCart totalSales={ totalSales } />
      </main>
    </div>
  );
}

export default Products;
