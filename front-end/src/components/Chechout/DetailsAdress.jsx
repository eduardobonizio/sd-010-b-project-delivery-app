import React from 'react';

export default function DetailsAdress() {
  return (
    <session>
      <h1>Detalhes e Endereço para Entrega</h1>
      <select
        name="seller"
        id="seller-id"
        data-testid="customer_checkout__select-seller"
      >
        seller
      </select>
      <input
        type="text"
        data-testid="customer_checkout__input-address"
      />
      <input
        type="text"
        data-testid="customer_checkout__input-addressNumber"
      />
    </session>
  );
}
