import React, { useState, useEffect } from 'react';

export default function DeliveryForm() {
  const [sellerList, setSellerList] = useState('');

  const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  };

  const getSellers = () => {
    const sellers = fetch('http://localhost:3001/users/sellers')
      .then((response) => response.json())
      .then((data) => data);

    setSellerList(sellers);
  };

  useEffect(() => {
    getSellers();
  }, []);

  return (
    <form style={ style }>
      <label htmlFor="seller">
        Vendedor(a):
        <select
          data-testid="customer_checkout__select-seller"
          name="sellers"
          id="sellers"
        >
          {sellerList.map((seller) => (
            <option
              value={ seller.id }
              key={ seller.id }
            >
              {seller.name}
            </option>))}
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
