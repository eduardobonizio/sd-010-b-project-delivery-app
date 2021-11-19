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
    <form className="w-11/12 m-20">
      <h2
        className="inline-block py-2 text-3xl border-b-2 border-yellow-color"
      >
        Detalhes e endereço para entrega

      </h2>
      <div className="flex justify-between w-full pl-32 mt-16 pr-96">
        <label className="flex flex-col" htmlFor="seller">
          <p className="text-lg">
            Pessoa Vendedora Responsável:
          </p>
          <select
            className="p-3 px-10 text-xl bg-white border-2 border-b-8 border-r-8
            rounded-2xl border-yellow-color"
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
        <label className="flex flex-col" htmlFor="address">
          <p className="text-lg">
            Endereço:
          </p>
          <input
            className="p-3 text-xl border-2 border-b-8 border-r-8 rounded-2xl
            border-yellow-color"
            id="address"
            name="address"
            type="text"
            required
            data-testid="customer_checkout__input-address"
            onChange={ ({ target: t }) => { updateState(t.name, t.value); } }
          />
        </label>
        <label className="flex flex-col" htmlFor="address-number">
          <p className="text-lg">Número:</p>
          <input
            className="p-3 text-xl border-2 border-b-8 border-r-8 rounded-2xl
            border-yellow-color"
            id="address-number"
            name="number"
            type="number"
            data-testid="customer_checkout__input-addressNumber"
            required
            onChange={ ({ target: t }) => { updateState(t.name, t.value); } }
          />
        </label>
      </div>
      <div className="flex justify-end w-full mt-10 pr-96">
        <button
          type="button"
          className="w-64 px-8 py-2 mt-10 text-xl font-medium rounded-md bg-yellow-color"
          data-testid="customer_checkout__button-submit-order"
          onClick={ () => { finishSale(); } }
          disabled={ !isValidData }
        >
          Finalizar Pedido
        </button>
      </div>
    </form>
  );
}
