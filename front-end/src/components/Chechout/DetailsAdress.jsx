import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import moment from 'moment';
import LoginContext from '../../context/LoginContext';

export default function DetailsAdress() {
  const { totalPrice } = useContext(LoginContext);
  const [data, setData] = useState([]);
  const [address, setAddress] = useState('');
  const [numberAddress, setNumberAddress] = useState('');
  const [sellerId, setSellerId] = useState(0);
  // const [userId, setUserId] = useState(0);

  // const users = () => {
  //   const user = localStorage.getItem('user');
  //   data.map(({ name, id }) => name === JSON.parse(user).name && setUserId(id));
  //   return user;
  // };

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then((result) => {
        setData(result.data);
      });
  }, []);

  const now = moment().format('DD/MM/YYYY');

  const buy = async () => {
    const respLogin = await axios.post('http://localhost:3001/sales', {
      totalPrice,
      address,
      numberAddress,
      now,
      sellerId,
      userId,
    });
    console.log(respLogin);
  };

  return (
    <session>
      <h1>Detalhes e Endereço para Entrega</h1>
      {console.log(sellerId)}
      <select
        name="seller"
        id="seller-id"
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
