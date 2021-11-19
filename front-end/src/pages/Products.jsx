import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopBar from '../components/TopBar';
import ProductCard from '../components/ProductCard';
import './css/Products.css';

function Products() {
  const name = localStorage.getItem('name');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('http://localhost:3001/products');
      console.log(response);
      setProducts(response.data);
    };
    getProducts();
  }, []);
  console.log(products);

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
        />))}
      </div>
    </>
  );
}

export default Products;
