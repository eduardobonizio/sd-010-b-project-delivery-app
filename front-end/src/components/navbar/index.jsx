import React from 'react';
import { Link } from 'react-router-dom';
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
            Fioravante Chiozzi
          </TextNavBar>
        </ContainerName>

        <Link to="/login" className="link__navbar">
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
