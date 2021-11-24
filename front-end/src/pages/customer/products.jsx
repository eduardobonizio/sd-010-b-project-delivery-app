import React from 'react';
import NavbarClient from '../../components/Navbar/navbarClientComponent';
import '../../styles/navBarClient.css';
import '../../styles/listProducts.css';
import Products from '../../components/products/productsComponent';

const Product = () => (
  <>
    <header>
      <NavbarClient />
    </header>
    <Products />
  </>
);

export default Product;
