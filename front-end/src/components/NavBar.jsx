import React, { useEffect, useState } from 'react';
import { Stack, Tab, Typography, Box, Button, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const customerLabelArray = [
  { label: 'Produtos', route: '/customer/products' },
  { label: 'Meus Pedidos', route: '/customer/checkout' },
];

const renderTabByuserRole = (userRole) => {
  if (userRole === 'customer') {
    return customerLabelArray
      .map(({ label, route }) => <Tab key={ label } label={ label } href={ route } />);
  }
  if (userRole === 'seller') {
    return (
      <Tab component="a" label="Pedidos" href="/seller/order" />
    );
  }
  if (userRole === 'admin') {
    return (
      <Tab component="a" label="Pedidos" href="/admin/manage" />
    );
  }
};
function NavBar({ username, userRole }) {
  const [tabsValue, setTabsValue] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (userRole === 'customer') {
      if (location.pathname === '/customer/products') setTabsValue(0);
      if (location.pathname === '/customer/checkout') setTabsValue(1);
    }
  }, [location.pathname, userRole]);

  const handleChange = (event, newValue) => {
    setTabsValue(newValue);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={ 0 }
    >
      <Tabs value={ tabsValue } onChange={ handleChange } aria-label="nav tabs example">
        { renderTabByuserRole(userRole) }
      </Tabs>
      <Stack direction="row" alignItems="center" spacing={ 2 }>
        <Box><Typography>{username}</Typography></Box>
        <Box><Button variant="contained">Sair</Button></Box>
      </Stack>
    </Stack>
  );
}

NavBar.propTypes = {
  username: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
};

export default NavBar;
