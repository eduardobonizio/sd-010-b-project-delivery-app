import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styles/Navbar';
import Context from '../context/Context';
import { removeLocalStorage } from '../services/helpers/servicesLocalStorage';

function NavBar() {
  const { User } = useContext(Context);

  return (
    <S.navBar>
      <Link to="/customer/products">
        <S.buttonNav
          type="button"
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTO
        </S.buttonNav>
      </Link>
      <Link to="/customer/orders">
        <S.buttonNav
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </S.buttonNav>
      </Link>
      <p>
        <S.buttonNav
          type="button"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {User.name}
        </S.buttonNav>
      </p>
      <Link to="/login">
        <S.buttonNav
          onClick={ () => removeLocalStorage('user') }
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
        >
          SAIR
        </S.buttonNav>
      </Link>
      <Link to="/login">
        <S.buttonNav type="button">atalho p login</S.buttonNav>
      </Link>
    </S.navBar>
  );
}

export default NavBar;
