import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import APITOKEN from '../api';

export default function FormDelivery({ total, cart }) {
  const [state, setState] = useState({ deliveryAddress: '',
    deliveryNumber: '',
    sellerId: 2 });
  const user = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

  const handleInputValue = (e) => {
    const { name } = e.target;
    setState({ ...state, [name]: e.target.value });
  };

  const handleCreateSale = async (e) => {
    e.preventDefault();
    const { token } = user;

    try {
      const sale = await APITOKEN.createSale({
        ...state, totalPrice: +total.replace(',', '.'), cart }, token);
      history.push(`orders/${sale.data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={ handleCreateSale }>
      <label htmlFor="seller">
        P. Vendedora Responsável
        <select
          onClick={ handleInputValue }
          data-testid="customer_checkout__select-seller"
          name="sellerId"
          id="vendedora"
        >
          <option value="fulana">Fulana</option>
        </select>
      </label>
      <label htmlFor="address">
        Endereço
        <input
          onChange={ handleInputValue }
          data-testid="customer_checkout__input-address"
          name="deliveryAddress"
          type="text"
        />
      </label>
      <label htmlFor="number">
        Número
        <input
          onChange={ handleInputValue }
          name="deliveryNumber"
          data-testid="customer_checkout__input-addressNumber"
          type="string"
        />
      </label>

      <button type="submit" data-testid="customer_checkout__button-submit-order">
        Finalizar Pedido
      </button>

    </form>
  );
}

FormDelivery.propTypes = {
  total: PropTypes.string.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
