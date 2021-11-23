import React from 'react';

export default function DetailsAddress() {
  return (
    <>
      <form>
        <select
          name="type"
          data-testid="customer_checkout__select-seller"
        >
          <option defaultValue="customer" selected>Cliente</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
        </select>
        <label htmlFor="endereco">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            name="endereço"
            type="text"
          />
        </label>
        <label htmlFor="numero">
          <input
            data-testid="customer_checkout__input-addressNumber"
            name="numero"
            type="number"
          />
        </label>
      </form>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="submit"
      >
        Finalizar Pedido
      </button>
    </>
  );
}
