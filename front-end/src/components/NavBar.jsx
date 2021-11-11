import React, { useEffect, useState } from 'react';
import { Stack, Tabs, Tab, Typography, Box, Button } from '@mui/material';
import PropTypes from 'prop-types';

function NavBar({ username, user }) {
  const [tabsValue, setTabsValue] = useState(false);

  const renderTabByUser = () => {
    const customerLabelArray = ['Produtos', 'Meus Pedidos'];

    if (user === 'customer') {
      return customerLabelArray
        .map((label) => <Tab value={ label } key={ label } label={ label } />);
    }
    if (user === 'seller') {
      return (
        <Tab value="Pedidos" label="Pedidos" />
      );
    }
    if (user === 'admin') {
      return (
        <Tab value="Gerenciar Usuários" label="Gerenciar Usuários" />
      );
    }
  };

  useEffect(() => {
    const verifyUserRole = () => {
      if (user === 'customer') setTabsValue('Produtos');
      if (user === 'seller') setTabsValue('Pedidos');
      if (user === 'admin') setTabsValue('Gerenciar Usuários');
    };

    verifyUserRole();
  }, [user]);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={ 0 }
    >
      <Tabs
        value={ tabsValue }
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

NavBar.propTypes = {
  username: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default NavBar;
