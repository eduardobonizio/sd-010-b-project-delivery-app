import {
  FormControl,
  InputLabel,
  NativeSelect,
  Stack,
  TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import getAllSellersAPI from '../api/getAllSellers';
import UsersContext from '../context/Users/UsersContext';

function CartForm() {
  const [sellerName, setSellerName] = useState('');
  const [sellersArray, setSellersArray] = useState([]);

  const {
    setSellerId,
    userAddress,
    setUserAddress,
    userAddressNumber,
    setUserAddressNumber,
  } = useContext(UsersContext);

  useEffect(() => {
    const getAllSellers = async () => {
      const sellers = await getAllSellersAPI();
      console.log(sellers);
      setSellersArray(sellers);
      setSellerName(sellers[0].name);
    };

    getAllSellers();
  }, []);

  useEffect(() => {
    const foundSeller = sellersArray.find(({ name }) => name === sellerName);
    if (foundSeller) {
      setSellerId(foundSeller.id);
    }
  }, [sellerName, sellersArray, setSellerId]);

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
    setSellerName(event.target.value);
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
          data-testid="customer_checkout__select-seller"
          value={ sellerName }
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
        value={ userAddress }
        onChange={ ({ target: { value } }) => setUserAddress(value) }
        label="Endereço"
        variant="outlined"
        data-testid="customer_checkout__input-address"
      />
      <TextField
        sx={ { maxWidth: 200, minWidth: 200 } }
        value={ userAddressNumber }
        onChange={ ({ target: { value } }) => setUserAddressNumber(value) }
        label="Número"
        variant="outlined"
        data-testid="customer_checkout__input-addressNumber"
      />
    </Stack>
  );
}

export default CartForm;
