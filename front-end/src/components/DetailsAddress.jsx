import React, { useContext, useState } from 'react';
import io from 'socket.io-client';

import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import { createSale, createSaleProducts } from '../services/apis/servicesSales';
import { getFromLocalStorage } from '../services/helpers/servicesLocalStorage';

const SELECT_SELLER = 'customer_checkout__select-seller';
const INPUT_ADDRESS = 'customer_checkout__input-address';
const INPUT_NUMBER = 'customer_checkout__input-addressNumber';
const SUBMIT_ORDER = 'customer_checkout__button-submit-order';

function DetailsAddress() {
  const history = useHistory();
  const { sellers, totalPrice, cart } = useContext(Context);
  const socket = io('http://localhost:3001');

  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [sellerId, setSellerId] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'address') setAddress(value);
    if (name === 'number') setNumber(value);
    if (name === 'seller') setSellerId(value);
  };

  const filterCart = async (idSale, token) => {
    cart.filter((product) => product.quantity > 0)
      .forEach(({ id, quantity }) => {
        createSaleProducts({ sale_id: idSale, product_id: id, quantity }, token);
      });
  };

  const sendOrder = async () => {
    const { token } = getFromLocalStorage('user');
    const saleData = {
      seller_id: sellerId,
      total_price: totalPrice.replace(',', '.'),
      delivery_address: address,
      delivery_number: number,
      status: 'Pendente' };
    const sale = await createSale(saleData, token);
    const { id } = sale;
    await filterCart(id, token);
    socket.emit('realizarPedido');
    history.push(`/customer/orders/${id}`);
  };

  return (
    <form>
      <span>P. Vendedora responsavel:</span>
      <select
        data-testid={ SELECT_SELLER }
        name="seller"
        onChange={ (e) => handleChange(e) }
      >
        <option value={ null }>Selecionar</option>
        {sellers.map((seller, index) => (
          <option
            key={ index }
            value={ seller.id }
          >
            {seller.name}
          </option>))}
      </select>
      <span>Endereço</span>
      <input
        data-testid={ INPUT_ADDRESS }
        type="text"
        name="address"
        onChange={ (e) => handleChange(e) }
      />
      <span>Numero</span>
      <input
        data-testid={ INPUT_NUMBER }
        type="text"
        name="number"
        onChange={ (e) => handleChange(e) }
      />
      <button
        data-testid={ SUBMIT_ORDER }
        type="button"
        onClick={ () => sendOrder() }
      >
        Finalizar Pedido
      </button>
    </form>
  );
}

export default DetailsAddress;
