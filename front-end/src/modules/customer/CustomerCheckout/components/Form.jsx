import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../../services/api';
import { useCustomer } from '../../../../hooks/useCustomer';
import { formatManipulatePrice } from '../../../../helpers/functions';

export default function Form() {
  const history = useHistory();
  const mountedRef = useRef(true);
  const user = JSON.parse(localStorage.getItem('user'));
  const { sales, total } = useCustomer();
  const [sellers, setSellers] = useState([]);
  const [selectSeller, setSelectSeller] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  // https://stackoverflow.com/questions/56450975/to-fix-cancel-all-subscriptions-and-asynchronous-tasks-in-a-useeffect-cleanup-f
  useEffect(() => {
    async function getSellers() {
      const response = await api.get('/sellers');
      setSellers(response.data);
      setSelectSeller(response.data[0]);
    }
    getSellers();
  }, []);

  async function handleFinalizeOrder(event) {
    event.preventDefault();
    const products = sales.map((sale) => ({
      productId: sale.productId, quantity: sale.quantity,
    }));
    const data = {
      sellerId: selectSeller.id,
      totalPrice: Number(formatManipulatePrice(total)),
      deliveryAddress,
      deliveryNumber,
      products,
      status: 'Pendente',
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: user.token,
    };

    const response = await api.post('/neworder', data, { headers });
    const { saleId } = response.data;

    history.push(`/customer/orders/${saleId}`);

    setDeliveryAddress('');
    setDeliveryNumber('');
    setSelectSeller(sellers[0]);
  }

  useEffect(() => {
    mountedRef.current = false;
  }, []);

  return (
    <div>
      <form>
        <select
          data-testid="customer_checkout__select-seller"
          name="seller"
          id="seller"
          value={ selectSeller }
        >
          {sellers.map(({ id, name }) => (
            <option key={ id } value={ name }>{ name }</option>
          ))}
        </select>
        <input
          type="text"
          data-testid="customer_checkout__input-address"
          value={ deliveryAddress }
          onChange={ (e) => setDeliveryAddress(e.target.value) }
        />
        <input
          type="text"
          data-testid="customer_checkout__input-addressNumber"
          value={ deliveryNumber }
          onChange={ (e) => setDeliveryNumber(e.target.value) }
        />
        <button
          type="button"
          onClick={ handleFinalizeOrder }
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </div>
  );
}
