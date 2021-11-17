import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Context from '../context/Context';
import * as S from '../styles/Navbar';
// import { removeLocalStorage } from '../services/helpers/servicesLocalStorage';

function NavBar() {
  const history = useHistory();
  const { User } = useContext(Context);

  const checkRole = () => {
    const { role } = User;
    console.log(role);
    if (role === 'customer') {
      return (
        <div>
          <Link to="/customer/products">
            <S.buttonNav
              type="button"
              data-testid="customer_products__element-navbar-link-products"
            >
              PRODUTO
            </S.buttonNav>
          </Link>
          <Link to="/customer/meusPedidos">
            <S.buttonNav
              type="button"
              data-testid="customer_products__element-navbar-link-orders"
            >
              MEUS PEDIDOS
            </S.buttonNav>
          </Link>
        </div>
      );
    }

    if (role === 'seller') {
      return (
        <div>
          <Link to="/page404">
            <S.buttonNav
              type="button"
              data-testid="customer_products__element-navbar-link-orders"
            >
              Pedidos
            </S.buttonNav>
          </Link>
        </div>
      );
    }

    if (role === 'administrador') {
      return (
        <div>
          <Link to="/page404">
            <S.buttonNav
              type="button"
              data-testid="customer_products__element-navbar-link-orders"
            >
              Gerenciar Usiários
            </S.buttonNav>
          </Link>
        </div>
      );
    }

    if (!role) { history.push('/'); }
  };

  return (
    <S.navBar>
      { checkRole() }
      <S.buttonNav
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {User.name}
      </S.buttonNav>
      <Link to="/login">
        <S.buttonNav
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
        >
          SAIR
        </S.buttonNav>
      </Link>
    </S.navBar>
  );
}

export default NavBar;
