import React from 'react';
import { Stack, Tabs, Tab, Typography, Box, Button } from '@mui/material';
import PropTypes from 'prop-types';

function NavBar({ username, user }) {
  const renderTabByUser = () => {
    if (user === 'customer') {
      return (
        <>
          <Tab value="products" label="Produtos" />
          <Tab value="my-orders" label="Meus Pedidos" />
        </>
      );
    }
    if (user === 'seller') {
      return (
        <Tab value="orders" label="Pedidos" />
      );
    }
    if (user === 'admin') {
      return (
        <Tab value="manage-users" label="Gerenciar Usuários" />
      );
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={ 0 }
    >
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        { renderTabByUser() }
      </Tabs>
      <Stack direction="row" alignItems="center" spacing={ 2 }>
        <Box><Typography>{username}</Typography></Box>
        <Box><Button variant="contained">Sair</Button></Box>
      </Stack>
    </Stack>
  );
}

NavBar.defaultProps = {
  username: '<Username>',
  user: 'customer',
};

NavBar.propTypes = {
  username: PropTypes.string,
  user: PropTypes.string,
};

export default NavBar;
