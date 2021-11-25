import React, { useEffect, useState } from 'react';
import { Stack, Tab, Typography, Box, Button, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';

const customerLabelArray = [
  { label: 'Produtos',
    route: '/customer/products',
    testid: 'customer_products__element-navbar-link-products' },
  { label: 'Meus Pedidos',
    route: '/customer/orders',
    testid: 'customer_products__element-navbar-link-orders' },
];

const renderTabByuserRole = (userRole, history) => {
  if (userRole === 'customer') {
    return customerLabelArray
      .map(({ label, route, testid }) => (
        <Tab
          data-testid={ testid }
          key={ label }
          label={ label }
          onClick={ () => history.push(route) }
        />
      ));
  }
  if (userRole === 'seller') {
    return (
      <Tab label="Pedidos" onClick={ () => history.push('/seller/orders') } />
    );
  }
  if (userRole === 'admin') {
    return (
      <Tab label="Pedidos" onClick={ () => history.push('/seller/orders') } />
    );
  }
};
function NavBar({ userRole }) {
  const [tabsValue, setTabsValue] = useState(0);

  const location = useLocation();
  const history = useHistory();
  const username = JSON.parse(localStorage.getItem('user')).name;
  useEffect(() => {
    if (userRole === 'customer') {
      if (location.pathname === '/customer/products') setTabsValue(0);
      if (location.pathname === '/customer/checkout') setTabsValue(0);
      if (location.pathname === '/customer/orders') setTabsValue(1);
    }
  }, [location.pathname, userRole]);

  const handleChange = (event, newValue) => {
    setTabsValue(newValue);
  };

  const onLogout = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={ 0 }
    >
      <Tabs value={ tabsValue } onChange={ handleChange } aria-label="nav tabs example">
        { renderTabByuserRole(userRole, history) }
      </Tabs>
      <Stack direction="row" alignItems="center" spacing={ 2 }>
        <Box>
          <Typography
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {username}
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ onLogout }
          >
            Sair
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}

NavBar.propTypes = {
  userRole: PropTypes.string.isRequired,
};

export default NavBar;
