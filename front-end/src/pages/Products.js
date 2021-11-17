import React, { useContext } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import AppContext from '../Context/AppContext';

function Products() {
  const { products } = useContext(AppContext);
  console.log('Card', products);

  return (
    <>
      <Header />
      <header>
        <h1>Card Component</h1>
      </header>

      <main>
        { products.map((product, index) => (
          <Card key={ index } product={ product } />
        )) }

      </main>
    </>
  );
}

export default Products;
