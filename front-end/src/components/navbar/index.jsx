import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFromLocalStorage } from '../../helpers/localStorage';
import {
  ContainerPedidos,
  ContainerTextProducts,
  Header,
  TextNavBar,
  ContainerName,
  ContainerLogout,
  ContainerGeneric,
} from './styles';

function NavBar() {
  const [userName, setUserName] = useState({});

  useEffect(() => {
    const user = getFromLocalStorage('user');
    setUserName(user);
  }, []);

  return (
    <Header>

      <ContainerGeneric>
        <Link to="/customer/products" className="link__navbar">
          <ContainerTextProducts
            data-testid="customer_products__element-navbar-link-products"
          >
            <TextNavBar>
              PRODUTOS
            </TextNavBar>
          </ContainerTextProducts>
        </Link>

        <Link to="/" className="link__navbar">
          <ContainerPedidos data-testid="customer_products__element-navbar-link-orders">
            <TextNavBar>
              PEDIDOS
            </TextNavBar>
          </ContainerPedidos>
        </Link>
      </ContainerGeneric>

      <ContainerGeneric>
        <ContainerName data-testid="customer_products__element-navbar-user-full-name">
          <TextNavBar>
            {userName.name}
          </TextNavBar>
        </ContainerName>

        <Link
          to="/login"
          className="link__navbar"
          onClick={ () => localStorage.removeItem('user') }
        >
          <ContainerLogout data-testid="customer_products__element-navbar-link-logout">
            <TextNavBar>
              SAIR
            </TextNavBar>
          </ContainerLogout>
        </Link>
      </ContainerGeneric>

    </Header>
  );
}

export default NavBar;
