import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import ProductsContext from '../context/productContext';
import { fetchAllSellers } from '../services/userAPI';
import postSale from '../services/saleAPI';

const initialState = {
  seller: 1,
  address: '',
  number: 0,
};

export default function DeliveryDetails() {
  const [checkoutInfo, setCheckoutInfo] = useState(initialState);
  const [sellers, setSellers] = useState([]);

  const history = useHistory();
  const { totalPrice, productsInCart } = useContext(ProductsContext);

  const updateState = (name, value) => {
    setCheckoutInfo({ ...checkoutInfo, [name]: value });
  };

  useEffect(() => {
    const getSellers = async () => {
      const data = await fetchAllSellers();
      setSellers(data);
    };
    getSellers();
  }, []);

  const finishSale = async () => {
    const { address, number, seller } = checkoutInfo;
    const { id, token } = JSON.parse(localStorage.getItem('user'));

    const payload = {
      user_id: id,
      seller_id: seller,
      total_price: totalPrice.toFixed(2),
      delivery_address: address,
      delivery_number: number,
      products: productsInCart.filter(({ quantity }) => quantity > 0),
    };

    const { id: saleId } = await postSale(payload, token);

    history.push(`/customer/orders/${saleId}`);
  };

  return (
    <form>
      <h2>Detalhes e endereço para entrega</h2>
      <label htmlFor="seller">
        Pessoa Vendedora Responsável:
        <select
          id="seller"
          name="seller"
          type="text"
          required
          data-testid="customer_checkout__select-seller"
          onChange={ ({ target: t }) => { updateState(t.name, t.value); } }
        >
          {sellers.map(({ name, id }, idx) => {
            if (idx === 0) {
              return <option key={ name } defaultValue value={ id }>{name}</option>;
            }
            return <option key={ name } value={ id }>{name}</option>;
          })}
        </select>
      </label>
      <label htmlFor="address">
        Endereço:
        <input
          id="address"
          name="address"
          type="text"
          required
          data-testid="customer_checkout__input-address"
          onChange={ ({ target: t }) => { updateState(t.name, t.value); } }
        />
      </label>
      <label htmlFor="address-number">
        Número:
        <input
          id="address-number"
          name="number"
          type="number"
          data-testid="customer_checkout__input-addressNumber"
          required
          onChange={ ({ target: t }) => { updateState(t.name, t.value); } }
        />
      </label>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ () => { finishSale(); } }
      >
        Finalizar Pedido
      </button>
    </form>
  );
}
