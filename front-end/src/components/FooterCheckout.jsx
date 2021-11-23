import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../Context/AppContext';

function FooterCheckout() {
  const { total } = useContext(AppContext);
  const [sellers, setSellers] = useState([]);

  const [sale, setSale] = useState({
    sellerId: '',
    totalPrice: total,
    deliveryAddress: '',
    deliveryNumber: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    console.log(value);
    setSale({ ...sale, [name]: value });
  };

  useEffect(() => {
    fetch('http://localhost:3001/users/search?role=seller')
      .then((response) => response.json())
      .then((response) => setSellers(response));
  }, []);

  return (
    <div>
      <h3>Detalhes e Endereço para Entrega</h3>

      <form>
        <label htmlFor="seller">
          P. Vendedora Responsável
          <select
            name="sellerId"
            id="seller"
            onChange={ (e) => handleChange(e) }
            data-testid="customer_checkout__select-seller"
          >
            <option value="choice">Escolha o vendedor</option>
            { sellers.map((seller, index) => (
              <option
                key={ index }
                value={ seller.id }
              >
                { seller.name }
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="endereco">
          Endereço
          <input
            type="text"
            name="deliveryAddress"
            id="endereco"
            onChange={ (e) => handleChange(e) }
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="numero">
          Número
          <input
            type="text"
            name="deliveryNumber"
            id="numero"
            onChange={ (e) => handleChange(e) }
            data-testid="customer_checkout__input-addressNumber"
          />
        </label>
      </form>

    </div>
  );
}

export default FooterCheckout;
