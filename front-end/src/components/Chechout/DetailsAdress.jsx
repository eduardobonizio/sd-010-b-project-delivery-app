import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import moment from 'moment';
import LoginContext from '../../context/LoginContext';

export default function DetailsAdress() {
  const { totalPrice } = useContext(LoginContext);
  const [data, setData] = useState([]);
  const [address, setAddress] = useState('');
  const [numberAddress, setNumberAddress] = useState('');
  const [sellerId, setSellerId] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const [saleId, setSaleId] = useState(0);

  const user = JSON.parse(localStorage.getItem('user'));
  const { token } = user;

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then((result) => {
        setData(result.data);
      });
  }, []);

  // const now = moment().format('DD/MM/YYYY');
  const now = moment();

  const config = {
    headers: { Authorization: token },
  };

  const bodyParameters = {
    totalPrice,
    address,
    numberAddress,
    now,
    sellerId: sellerId || 2,
    userId: user.id,
  };

  const buy = async () => {
    console.log('buy');
    const respLogin = await axios.post(
      'http://localhost:3001/sales',
      bodyParameters,
      config,
    );

    console.log('oi', respLogin);
    setSaleId(respLogin.data.id);
    setRedirect(true);
  };

  if (redirect) {
    return (
      <Redirect to={ `/customer/orders/${saleId}` } />
    );
  }

  return (
    <session>
      <h1>Detalhes e Endereço para Entrega</h1>
      <select
        name="seller"
        id="seller-id"
        value={ sellerId || 2 }
        data-testid="customer_checkout__select-seller"
        onClick={ (event) => setSellerId(event.target.value) }
      >
        {data.map(({ role, name, id }) => role === 'seller' && (
          <option key={ role } value={ id }>{ name }</option>))}
      </select>
      <input
        type="text"
        data-testid="customer_checkout__input-address"
        onChange={ (event) => setAddress(event.target.value) }
      />
      <input
        type="text"
        data-testid="customer_checkout__input-addressNumber"
        onChange={ (event) => setNumberAddress(event.target.value) }
      />
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ () => buy() }
      >
        FINALIZAR PEDIDO
      </button>
    </session>
  );
}
