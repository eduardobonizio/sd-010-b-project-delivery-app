import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import createSale from '../services/apis/servicesSales';
import { getFromLocalStorage } from '../services/helpers/servicesLocalStorage';

const SELECT_SELLER = 'customer_checkout__select-seller';
const INPUT_ADDRESS = 'customer_checkout__input-address';
const INPUT_NUMBER = 'customer_checkout__input-addressNumber';
const SUBMIT_ORDER = 'customer_checkout__button-submit-order';

function DetailsAddress() {
  const { sellers, totalPrice } = useContext(Context);

  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [sellerId, setSellerId] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'address') setAddress(value);
    if (name === 'number') setNumber(value);
    if (name === 'seller') setSellerId(event.target.value);
  };

  const sendOrder = async () => {
    // fetch no createSale
    const { token } = getFromLocalStorage('user');
    // Falta o seller_id
    const saleData = {
      seller_id: sellerId,
      total_price: totalPrice.replace(',', '.'),
      delivery_address: address,
      delivery_number: number,
      status: 'pendente' };
    await createSale(saleData, token);
    // enviar para o bd: seller_id, total_price address number status
  };

  return (
    <form>
      <span>P. Vendedora responsavel:</span>
      <select
        data-testid={ `${SELECT_SELLER}` }
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
        data-testid={ `${INPUT_ADDRESS}` }
        type="text"
        name="address"
        onChange={ (e) => handleChange(e) }
      />
      <span>Numero</span>
      <input
        data-testid={ `${INPUT_NUMBER}` }
        type="text"
        name="number"
        onChange={ (e) => handleChange(e) }
      />
      <button
        data-testid={ `${SUBMIT_ORDER}` }
        type="button"
        onClick={ () => sendOrder() }
      >
        Finalizar Pedido
      </button>
    </form>
  );
}

export default DetailsAddress;
