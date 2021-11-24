import React, { useState } from 'react';
// import axios from 'axios';
import { useHistory } from 'react-router-dom';

function FormCheckout() {
  const [setSeller] = useState('');
  const [setAddress] = useState('');
  const [setNumber] = useState('');
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'seller') {
      setSeller(value);
    } else if (name === 'address') {
      setAddress(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <form>
        <div>
          <span>P. Vendedora Responsável:</span>
          <select
            onChange={ handleChange }
            data-testid="customer_checkout__select-seller"
          >
            <option>Vendedora 1</option>
            <option>Vendedora 2</option>
            <option>Vendedora 3</option>
          </select>
          <span>Endereço</span>
          <input
            type="text"
            onChange={ handleChange }
            name="address"
            data-testid="customer_checkout__input-address"
          />
          <span>Número</span>
          <input
            type="number"
            onChange={ handleChange }
            name="number"
            data-testid="customer_checkout__input-addressNumber"
          />
        </div>
        <div>
          <button
            type="submit"
            data-testid="customer_checkout__button-submit-order"
            onClick={ () => history.push('/customer/orders/:id') }
          >
            FINALIZAR PEDIDO
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormCheckout;
