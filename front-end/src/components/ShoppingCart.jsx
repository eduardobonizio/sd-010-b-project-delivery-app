import React from 'react';
import '../styles/ShoppingCart.css';

function shoppingCart({ totalSales }) {
  return (
    <button type="button" className="shopping-cart">{`Carrinho R$ ${totalSales}`}</button>
  );
}
export default shoppingCart;
