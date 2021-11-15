import React, { useEffect, useContext, useState } from 'react';
import NavBar from '../components/navBar';
import ProductCard from '../components/ProductCard';
import ProductsContext from '../context/ProductsContext';

export default function Customer() {
  const [isLoading, setLoading] = useState(true);
  const {
    products,
  } = useContext(ProductsContext);

  useEffect(() => {
    // setUserInfo(JSON.parse(localStorage.getItem('user')));
    // getProducts();
    setLoading(false);
  }, []);

  return !isLoading
    ? (
      <div>
        <NavBar />
        <div>
          { products.map((item, index) => (
            <ProductCard key={ index } product={ item } />
          ))}
        </div>
      </div>
    ) : <span>Carregando...</span>;
}
