import React from 'react';
import Navbar from '../components/navbar';
import ProductCard from '../components/productCard';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$100',
      image: 'https://picsum.photos/id/1/200/300',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$200',
      image: 'https://picsum.photos/id/2/200/300',
    },
  ];

  return (
    <div>
      <Navbar name="Camila" products="Produtos" orders="Pedidos" />
      { products.map((product) => {
        console.log('lint');
        return <ProductCard key={ product.id } product={ product } />;
      })}
    </div>
  );
}

export default Products;
