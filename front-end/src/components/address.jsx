import React from 'react';

function Address() {
  return (
    <main>
      <form>
        <div>
          <select data-testid="customer_checkout__select-seller">
            vendedor
            <option>fulano</option>
          </select>
        </div>
        <div>
          <label htmlFor="endereço">
            Endereço
            <input data-testid=" customer_checkout__input-address" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="numero">
            Número
            <input data-testid="customer_checkout__input-addressNumber" type="text" />
          </label>
        </div>
      </form>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="submit"
      >
        Finalizar pedido
      </button>
    </main>
  );
}

export default Address;
