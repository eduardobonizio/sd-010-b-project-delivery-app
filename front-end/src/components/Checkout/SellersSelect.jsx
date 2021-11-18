import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dataTestIdDict from '../../utils/dataTestIdDict';

const { dataTestId29 } = dataTestIdDict;

function SellersSelect() {
  const [sellers, setSellers] = useState([]);

  const getAllSellers = async () => {
    const endPoint = 'http://localhost:3001/users/sellers';
    try {
      const { data } = await axios.get(endPoint);
      setSellers(data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getAllSellers();
  }, []);

  return (
    <label htmlFor="sellers" className="order-address-details-field">
      P. Vendedora Responsável
      <select name="sellers" id="sellers" className="p-10" data-testid={ dataTestId29 }>
        {sellers.map(({ id, name }) => (
          <option key={ id } value={ id }>{name}</option>
        ))}
      </select>
    </label>
  );
}

export default SellersSelect;
