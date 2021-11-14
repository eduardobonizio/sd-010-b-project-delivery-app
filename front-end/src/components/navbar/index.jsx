import React from 'react';
import { Link } from 'react-router-dom';
import { getFromLocalStorage, setOnLocalStorage } from '../../helpers/localStorage';
import {
  ContainerPedidos,
  ContainerTextProducts,
  Header,
  TextNavBar,
  ContainerName,
  ContainerLogout,
  ContainerGeneric,
} from './styles';

setOnLocalStorage('user', {
  name: 'Fioravante chiozzi',
  email: 'fioravate@gmail.com',
  role: 'customer',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.',
});

const user = getFromLocalStorage('user');

const clearStorage = () => {
  localStorage.removeItem('user');
};

function NavBar() {
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

        <Link to="/customer/orders" className="link__navbar">
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
            {user.name}
          </TextNavBar>
        </ContainerName>

        <Link to="/login" className="link__navbar" onClick={ clearStorage }>
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
