import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../Context/AppContext';

function FooterCheckout() {
  const { total, dataOrder } = useContext(AppContext);
  const [sellers, setSellers] = useState([]);
  const [saleId, setSaleId] = useState('');
  console.log('Id primeiro aqui', saleId);
  console.log('dataOrder', dataOrder);

  const [sale, setSale] = useState({
    sellerId: '',
    totalPrice: '',
    deliveryAddress: '',
    deliveryNumber: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    console.log(value);
    setSale({ ...sale, [name]: value, totalPrice: total.replace(',', '.') });
  };

  useEffect(() => {
    fetch('http://localhost:3001/users/search?role=seller')
      .then((response) => response.json())
      .then((response) => setSellers(response));
  }, []);

  const tok = localStorage.getItem('user');
  console.log(JSON.parse(tok).token);
  const contentType = 'application/json';
  const handleSubmit = async () => {
    const url = 'http://localhost:3001/sales';
    const header = {
      method: 'POST',
      body: JSON.stringify(sale),
      headers: new Headers({
        'Content-Type': contentType,
        Accept: contentType,
        authorization: JSON.parse(tok).token,
      }),
    };
    await fetch(url, header)
      .then((response) => response.json(response))
      .then((response) => setSaleId(response.id))
      .catch((err) => console.log('Erro aqui', err));
    console.log('Id aqui', saleId);
    // await dataOrder.forEach((order) => {
    //   console.log(order);
    //   fetch('http://localhost:3001/saleProducts', {
    //     method: 'POST',
    //     body: JSON.stringify({ saleId, productId: order.id, quantity: order.quantity }),
    //     headers: new Headers({
    //       'Content-Type': contentType,
    //       Accept: contentType,
    //       authorization: JSON.parse(tok).token,
    //     }),
    //   }).catch((err) => console.log('Erro aqui', err));
    // });
  };
  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     await dataOrder.forEach((order) => {
  //       console.log(order);
  //       fetch('http://localhost:3001/saleProducts', {
  //         method: 'POST',
  //         body: JSON
  //           .stringify({ saleId, productId: order.id, quantity: order.quantity }),
  //         headers: new Headers({
  //           'Content-Type': contentType,
  //           Accept: contentType,
  //           authorization: JSON.parse(tok).token,
  //         }),
  //       }).catch((err) => console.log('Erro aqui', err));
  //     });
  //   };
  //   fetchAPI();
  // }, [saleId]);

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
        <button type="button" onClick={ handleSubmit }>Finalizar Venda</button>
      </form>
    </div>
  );
}

export default FooterCheckout;
