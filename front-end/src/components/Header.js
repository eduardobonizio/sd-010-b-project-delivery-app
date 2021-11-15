import React from 'react';

export default function Header(props) {
  const {pageName, yourOrder, userName} = props;

  function structure(status) {
    if (status === 'MEUS PEDIDOS'){
   return (
     <ul> 
        <li data-testid="customer_products__element-navbar-link-products">{pageName}</li>
        <li data-testid="customer_products__element-navbar-link-orders">MEUS PEDIDOS</li>
        <li data-testid="customer_products__element-navbar-user-full-name">{userName}</li>
        <li data-testid="customer_products__element-navbar-link-logout">Sair</li>
     </ul>
   )
    }
  }
  return (
    <header>
      <nav>
                 
          {structure(yourOrder)}
          
                
      </nav>

    </header>
  );
}
