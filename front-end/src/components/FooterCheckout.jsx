/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../Context/AppContext';

function FooterCheckout() {
  const { dataOrder } = useContext(AppContext);

  const [sellers, setSellers] = useState([]);
  const [sale, setSale] = useState({
    sellerId: '',
    totalPrice: '',
    deliveryAddress: '',
    deliveryNumber: '',
  });

  // const toke = localStorage.getItem('user');
  // console.log(toke.tolen);

  useEffect(() => {
    fetch('http://localhost:3001/users/search?role=seller')
      .then((response) => response.json())
      .then((response) => setSellers(response));
  });

  useEffect(() => {
    const getTotal = () => {
      const result = dataOrder.reduce((prev, curren) => prev + Number(curren.total), 0)
        .toFixed(2).replace('.', ',');
      return result;
    };
    setSale({ ...sale, totalPrice: getTotal() });
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    console.log(value);
    setSale({ ...sale, [name]: value });
  };

  // const handleSubmit = () => {
  //   const url = 'http://localhost:3000/sales';
  //   const header = {
  //     method: 'POST',
  //     body: JSON.stringify(sale),
  //     // authorization:
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     }),
  //   };
  //   fetch(url, header)
  //     .then(() => getTasks())
  //     .catch((err) => console.log('Erro aqui', err));
  // };

  return (
    <div>
      <h3>Detalhes e Endereço para Entrega</h3>
      <div>
        <form>
          <label htmlFor="seller">
            P. Vendedora Responsável
            <br />
            <select
              name="sellerId"
              id="seller"
              onChange={ (e) => handleChange(e) }
            >
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
            />
          </label>
          <label htmlFor="numero">
            Número
            <input
              type="text"
              name="deliveryNumber"
              id="numero"
              onChange={ (e) => handleChange(e) }
            />
          </label>
        </form>
      </div>
    </div>
  );
}

export default FooterCheckout;
