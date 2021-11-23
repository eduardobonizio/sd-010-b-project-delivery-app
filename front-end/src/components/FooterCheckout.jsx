import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../Context/AppContext';

function FooterCheckout() {
  const { total, dataOrder } = useContext(AppContext);
  const [sellers, setSellers] = useState([]);
  const [saleId, setSaleId] = useState('');
  console.log(saleId);
  console.log('dataOrder', dataOrder);

  const [sale, setSale] = useState({
    sellerId: '',
    totalPrice: '',
    deliveryAddress: '',
    deliveryNumber: '',
  });

  const { token } = localStorage.getItem('user');
  console.log(token);

  const handleChange = ({ target: { name, value } }) => {
    console.log(value);
    setSale({ ...sale, [name]: value, totalPrice: total });
  };

  useEffect(() => {
    fetch('http://localhost:3001/users/search?role=seller')
      .then((response) => response.json())
      .then((response) => setSellers(response));
  }, []);

  const handleSubmit = async () => {
    const contentType = 'application/json';
    const url = 'http://localhost:3000/sales';
    const header1 = {
      method: 'POST',
      body: JSON.stringify(sale),
      authorization: token,
      headers: new Headers({
        'Content-Type': contentType,
        Accept: contentType,
      }),
    };
    await fetch(url, header1)
      .then((response) => response.json(response))
      .then((response) => setSaleId(response.id))
      .catch((err) => console.log('Erro aqui', err));

    await dataOrder.forEach((order) => {
      fetch('http://localhost:3000/saleProducts', {
        method: 'POST',
        body: JSON.stringify({ saleId, productId: order.id, quantity: order.quantity }),
        authorization: token,
        headers: new Headers({
          'Content-Type': contentType,
          Accept: contentType,
        }),
      }).catch((err) => console.log('Erro aqui', err));
    });
  };

  return (
    <div>
      <h3>Detalhes e Endereço para Entrega</h3>
      <div>
        <form>
          <label htmlFor="seller">
            P. Vendedora Responsável
            <select
              name="sellerId"
              id="seller"
              onChange={ (e) => handleChange(e) }
            >
              { sellers.map((seller, index) => (
                <option
                  key={ index }
                  value="20"
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
          <button type="button" onClick={ handleSubmit }>Finalizar Venda</button>
        </form>
      </div>
    </div>
  );
}

export default FooterCheckout;
