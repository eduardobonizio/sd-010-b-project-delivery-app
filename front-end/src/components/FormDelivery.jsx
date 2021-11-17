import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import API from '../api';
import PropTypes from 'prop-types';

// COMPONENTE DO 21 QUE AINDA NÃO FOI RESOLVIDO

export default function FormDelivery({ total }) {
  const [state, setState] = useState({ address: '', number: '', seller: '' });
  // const [user] = useState(() => JSON.parse(localStorage.getItem('user')));
  // const [saleId, setSaleId] = useState(0);
  // const history = useHistory();

  const handleInputValue = (e) => {
    const { name } = e.target;
    setState({ ...state, [name]: e.target.value });
  };

  const handleCreateSale = async (e) => {
    e.preventDefault();
    console.log(total);

    // try {
    // const id = await API.createSale({ userId: user.id,
    //   sellerId: user.id,
    //   totalPrice: total,
    //   ...state,
    // });
    // setSaleId(id);
    // history.push(`/customer/orders/${saleId}`);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <form onSubmit={ handleCreateSale }>
      <label htmlFor="seller">
        P. Vendedora Responsável
        <select
          onClick={ handleInputValue }
          data-testid="customer_checkout__select-seller"
          name="seller"
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
          name="address"
          type="text"
        />
      </label>
      <label htmlFor="number">
        Número
        <input
          onChange={ handleInputValue }
          name="number"
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
  total: PropTypes.number.isRequired,
};
