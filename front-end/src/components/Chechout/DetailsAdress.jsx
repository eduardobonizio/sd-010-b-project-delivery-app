import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import moment from 'moment';
import LoginContext from '../../context/LoginContext';

export default function DetailsAdress() {
  const { totalPrice, arrayProducts } = useContext(LoginContext);
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
        const idSeller = result.data.find(({ role }) => role === 'seller');
        console.log(idSeller);
        setSellerId(idSeller.id);
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
    sellerId,
    userId: user.id,
    arrayProducts,
  };

  const buy = async () => {
    console.log(sellerId);
    const respLogin = await axios.post(
      'http://localhost:3001/sales',
      bodyParameters,
      config,
    );

    console.log(respLogin.data);
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
      { console.log(sellerId) }
      <h1>Detalhes e Endereço para Entrega</h1>
      <select
        name="seller"
        id="seller-id"
        data-testid="customer_checkout__select-seller"
        onClick={ (event) => setSellerId(event.target.value) }
      >
        {data.map(({ role, name, id }) => role === 'seller' && (
          <option key={ role } value={ id }>{ name }</option>
        ))}
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
