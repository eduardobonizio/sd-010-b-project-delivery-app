import React, { useEffect, useState } from 'react';
import { fetchAllSellers } from '../services/userAPI';

const initialState = {
  seller: '',
  address: '',
  number: 0,
};

export default function DeliveryDetails() {
  const [checkoutInfo, setCheckoutInfo] = useState(initialState);
  const [sellers, setSellers] = useState([]);

  const updateState = (name, value) => {
    setCheckoutInfo({ ...inputData, [name]: value });
  };

  useEffect(() => {
    const getSellers = async () => {
      const data = await fetchAllSellers();
      setSellers(data);
    };
    getSellers();
  }, []);

  // TODO: remover o console.log abaixo após configurar checkout
  console.log(checkoutInfo);

  return (
    <form>
      <h2>Detalhes e endereço para entrega</h2>
      <label htmlFor="seller">
        Pessoa Vendedora Responsável:
        <select
          id="seller"
          name="seller"
          type="text"
          data-testid="customer_checkout__select-seller"
          onChange={ ({ target: t }) => { updateState(t.name, t.value); } }
        >
          {sellers.map(({ name }) => (
            <option key={ name }>{name}</option>
          ))}
        </select>
      </label>
      <label htmlFor="address">
        Endereço:
        <input
          id="address"
          name="address"
          type="text"
          data-testid="customer_checkout__input-address"
          onChange={ ({ target: t }) => { updateState(t.name, t.value); } }
        />
      </label>
      <label htmlFor="address-number">
        Número:
        <input
          id="address-number"
          name="number"
          type="number"
          data-testid="customer_checkout__input-addressNumber"
          onChange={ ({ target: t }) => { updateState(t.name, t.value); } }
        />
      </label>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar Pedido

      </button>
    </form>
  );
}
