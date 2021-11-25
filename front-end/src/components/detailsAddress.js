import React, { useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services';

export default function DetailsAddress(props) {
  const { totalPrice } = props;
  const [order, setOrder] = useState({
    deliveryAddress: '',
    deliveryNumber: '',
    sellerName: 'Cliente',
  });
  const createOrder = async () => {
    const { id, token } = JSON.parse(localStorage.getItem('user'));
    api.setToken(token);
    const { data } = await api.createOrder({ ...order, id, totalPrice });
    console.log(data);
    return window.location.replace(`/customer/orders/${data.id}`);
  };

  const getInputValues = ({ target: { value, name } }) => {
    setOrder({ ...order, [name]: value });
  };

  return (
    <>
      <form>
        <select
          name="sellerName"
          data-testid="customer_checkout__select-seller"
          onChange={ getInputValues }
        >
          <option defaultValue="Cliente">Cliente</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
        </select>
        <label htmlFor="deliveryAddress">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            name="deliveryAddress"
            type="text"
            value={ order.deliveryAddress }
            onChange={ getInputValues }
          />
        </label>
        <label htmlFor="deliveryNumber">
          <input
            data-testid="customer_checkout__input-addressNumber"
            name="deliveryNumber"
            type="number"
            value={ order.deliveryNumber }
            onChange={ getInputValues }
          />
        </label>
      </form>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="submit"
        onClick={ createOrder }
      >
        Finalizar Pedido
      </button>
    </>
  );
}
DetailsAddress.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};
