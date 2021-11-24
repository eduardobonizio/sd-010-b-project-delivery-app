import React from 'react';

export default function DeliveryForm() {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  };
  return (
    <form style={ style }>
      <label htmlFor="seller">
        Vendedor(a):
        <select
          data-testid="customer_checkout__select-seller"
          name="sellers"
          id="sellers"
        >
          <option value="Vendedor1">Vendedor1</option>
          <option value="Vendedor2">Vendedor2</option>
          <option value="Vendedor3">Vendedor3</option>
        </select>
        <br />
      </label>
      <label htmlFor="address">
        Endereço:
        <input
          data-testid="customer_checkout__input-address"
          type="text"
          name="address"
        />
      </label>
      <label htmlFor="number">
        Número
        <input
          data-testid="customer_checkout__input-addressNumber"
          type="text"
          name="number"
        />
      </label>
      <button type="button">Finalizar Pedido</button>
    </form>
  );
}
