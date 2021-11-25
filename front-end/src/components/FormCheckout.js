import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Context } from '../context/ContextGlobal';

function FormCheckout() {
  const {
    seller,
    setSeller,
    address,
    setAddress,
    number,
    setNumber,
    total } = useContext(Context);
  const URL = 'http://localhost:3001/all-sellers';
  const history = useHistory();

  useEffect(() => {
    const getSeller = async () => {
      const userStorage = localStorage.getItem('user');
      const { data } = await axios.get(URL,
        { headers: { Authorization: JSON.parse(userStorage).token } });
      const { allSellers } = data;
      setSeller(allSellers.map((sell) => sell));
    };
    getSeller();
  }, [setSeller]);

  const sendData = async () => {
    const userStorage = localStorage.getItem('user');
    const cartStorage = localStorage.getItem('cart');
    const { dataSale } = await axios.post('http://localhost:3001/finish-sale',
      {
        totalPrice: total,
        deliveryAddress: address,
        deliveryNumber: number,
        userId: JSON.parse(userStorage).id,
        sellerId: seller.id,
        cart: JSON.parse(cartStorage),
      },
      { headers: { Authorization: JSON.parse(userStorage).token } });
    console.log(dataSale);
    history.push(`/customer/orders/${dataSale.id}`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'seller') {
      setSeller(value);
    } else if (name === 'address') {
      setAddress(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <form>
        <div>
          <span>P. Vendedora Responsável:</span>
          <select
            onChange={ handleChange }
            data-testid="customer_checkout__select-seller"
          >
            { seller.map((sell) => (
              <option
                key={ sell.id }
              >
                { sell.name }
              </option>
            )) }
          </select>
          <span>Endereço</span>
          <input
            type="text"
            onChange={ handleChange }
            name="address"
            data-testid="customer_checkout__input-address"
          />
          <span>Número</span>
          <input
            type="number"
            onChange={ handleChange }
            name="number"
            data-testid="customer_checkout__input-addressNumber"
          />
        </div>
        <div>
          <button
            type="button"
            data-testid="customer_checkout__button-submit-order"
            onClick={ () => sendData() }
          >
            FINALIZAR PEDIDO
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormCheckout;
