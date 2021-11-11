import React, { useContext } from 'react';
import { Context } from '../context/ContextGlobal';
import NavBar from '../components/NavBar';

function CustomerProducts() {
  const { products, setProducts } = useContext(Context);

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default CustomerProducts;
