import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import ProductsContext from '../context/productContext';
import { fetchAllSellers } from '../services/userAPI';
import postSale from '../services/saleAPI';

const initialState = {
  seller: 0,
  address: '',
  number: 0,
};

export default function DeliveryDetails() {
  const [checkoutInfo, setCheckoutInfo] = useState(initialState);
  const [sellers, setSellers] = useState([]);
  const [isValidData, setIsValidData] = useState(false);

  const history = useHistory();
  const { totalPrice, productsInCart } = useContext(ProductsContext);

  const updateState = (name, value) => {
    setCheckoutInfo({ ...checkoutInfo, [name]: value });
  };

  useEffect(() => {
    const validateInput = () => {
      const arrTest = Object.keys(initialState);

      const validation = arrTest.map((el) => {
        if (checkoutInfo[el] === initialState[el]) {
          return false;
        }
        return true;
      });

      setIsValidData(validation.every((el) => el === true));
    };

    validateInput();
  }, [checkoutInfo]);

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
      userId: id,
      sellerId: seller,
      totalPrice: totalPrice.toFixed(2),
      deliveryAddress: address,
      deliveryNumber: number,
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
          onClick={ ({ target: t }) => {
            console.log(t.value);
            updateState(t.name, Number(t.value));
          } }
        >
          <option>Selecionar vendedor</option>
          {sellers.map(({ name, id }) => (
            <option key={ name } value={ id }>{name}</option>
          ))}
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
        disabled={ !isValidData }
      >
        Finalizar Pedido
      </button>
    </form>
  );
}
