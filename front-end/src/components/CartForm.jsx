import {
  FormControl,
  InputLabel,
  NativeSelect,
  Stack,
  TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import APICalls from '../services/APICalls';

function CartForm() {
  const [seller, setSeller] = useState('');
  const [sellersArray, setSellersArray] = useState([]);

  useEffect(() => {
    const getAllSellers = async () => {
      const sellers = await APICalls.getAllSellers();
      setSellersArray(sellers);
      setSeller(sellers[0].name);
    };

    getAllSellers();
  }, []);

  const renderSellers = () => {
    const mappedRenderSellers = Array.isArray(sellersArray)
      ? sellersArray.map(
        ({ id, name }) => (
          <option
            data-testid="select-option"
            key={ id }
            value={ name }
          >
            { name }
          </option>
        ),
      ) : null;

    return mappedRenderSellers;
  };

  const selectOnChange = (event) => {
    setSeller(event.target.value);
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={ 2 }
    >
      <FormControl sx={ { maxWidth: 200, minWidth: 200 } }>
        <InputLabel
          variant="standard"
          htmlFor="select-seller"
        >
          P. Vendedora Responsável
        </InputLabel>
        <NativeSelect
          data-testid="select-box"
          value={ seller }
          inputProps={ {
            name: 'P. Vendedora Responsável',
            id: 'select-seller',
          } }
          onChange={ (event) => selectOnChange(event) }
        >
          { renderSellers() }
        </NativeSelect>
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
