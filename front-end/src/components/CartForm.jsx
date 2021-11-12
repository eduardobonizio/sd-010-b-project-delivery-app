import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField } from '@mui/material';
import React, { useState } from 'react';

// Just for testing until macro requirement 3 isn't finished
const SELLERS_ARRAY = [
  {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller',
  },
  {
    id: 4,
    name: 'Matheus',
    email: 'matheus@seller.com',
    password: '123456',
    role: 'seller',
  },
];
// ---------------------------------------------------------

function CartForm() {
  const [seller, setSeller] = useState('');
  const [sellersArray] = useState(SELLERS_ARRAY);

  const renderSellers = () => {
    const mappedRenderSellers = Array.isArray(sellersArray)
      ? sellersArray.map(
        ({ id, name }) => (
          <MenuItem key={ id } value={ name }>{ name }</MenuItem>
        ),
      ) : null;

    return mappedRenderSellers;
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={ 2 }
    >
      <FormControl sx={ { maxWidth: 200, minWidth: 200 } }>
        <InputLabel id="select-label">P. Vendedora Responsável</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={ seller }
          label="P. Vendedora Responsável"
          onChange={ (event) => setSeller(event.target.value) }
        >
          { renderSellers() }
        </Select>
      </FormControl>
      <TextField
        sx={ { maxWidth: 500, minWidth: 500 } }
        label="Endereço"
        variant="outlined"
      />
      <TextField
        sx={ { maxWidth: 200, minWidth: 200 } }
        label="Número"
        variant="outlined"
      />
    </Stack>
  );
}

export default CartForm;
