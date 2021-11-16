import React from 'react';

function DeliveryDetails() {
  return (
    <div className="order-address-details">
      <div className="order-address-details-inputs">
        <label htmlFor="sellers" className="order-address-details-field">
          P. Vendedora Responsável
          <select name="sellers" id="sellers" className="p-10">
            <option value="fulana">Fulana pereira</option>
          </select>
        </label>
        <label htmlFor="address" className="order-address-details-field">
          Endereço
          <input type="text" name="address" id="address" className="p-10" />
        </label>
        <label htmlFor="number" className="order-address-details-field">
          Número
          <input type="text" name="number" id="number" className="p-10" />
        </label>
      </div>
      <button type="submit">Finalizar pedido</button>
    </div>
  );
}

export default DeliveryDetails;
