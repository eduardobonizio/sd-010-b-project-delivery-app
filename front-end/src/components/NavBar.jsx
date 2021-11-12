import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Container } from '@mui/material';
import {
  ProductionQuantityLimitsOutlined,
  RequestQuoteOutlined,
  LoginOutlined,
  ExitToAppOutlined,
} from '@mui/icons-material';
import Context from '../context/Context';

function NavBar() {
  const { value, setValue } = useContext(Context);
  return (
    <header>
      <Box sx={ { width: 800 } }>
        <Container
          sx={ {
            width: 'xl',
            borderRadius: 5,
            bgcolor: 'primary.main',
            color: 'text.secondary',
            boxShadow: 5,
            gap: 6,
          } }
        >
          <BottomNavigation
            sx={ {
              opacity: 0.9,
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 4fr)',
              gap: 5,
              gridTemplateRows: 'auto',
              gridTemplateAreas: '"produtos meusPedidos cicranoDaSilva sair"',
            } }
            showLabels
            value={ value }
            onChange={ (event, newValue) => {
              setValue(newValue);
            } }
          >
            <BottomNavigationAction
              data-testid="customer_products__element-navbar-link-products"
              sx={ {
                width: 'xs',
                gridArea: 'produtos',
                textAlign: 'center',
                gap: 0,
              } }
              label="Produtos"
              icon={ <ProductionQuantityLimitsOutlined /> }
            />
            <BottomNavigationAction
              data-testid="customer_products__element-navbar-link-orders"
              sx={ {
                width: 'xs',
                gridArea: 'meusPedidos',
                boxShadow: 6,
                gap: 0,
                borderRadius: 5,
              } }
              label="Meus Pedidos"
              icon={ <RequestQuoteOutlined /> }
            />
            <BottomNavigationAction
              data-testid="customer_products__element-navbar-user-full-name"
              sx={ {
                width: 'xs',
                gridArea: 'cicranoDaSilva',
                boxShadow: 6,
                gap: 0,
                borderRadius: 5,
              } }
              label="Cicrano da Silva"
              icon={ <LoginOutlined /> }
            />
            <BottomNavigationAction
              data-testid="customer_products__element-navbar-link-logout"
              sx={ {
                width: 'xs',
                gridArea: 'sair',
                boxShadow: 6,
                gap: 0,
                borderRadius: 5,
              } }
              label="Sair"
              icon={ <ExitToAppOutlined /> }
            />
          </BottomNavigation>
        </Container>
      </Box>
    </header>
  );
}

export default NavBar;
