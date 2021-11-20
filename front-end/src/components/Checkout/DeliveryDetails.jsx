import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataTestIdDict from '../../utils/dataTestIdDict';
import InputText from './InputText';
import SellersSelect from './SellersSelect';

const { dataTestId30, dataTestId31, dataTestId32 } = dataTestIdDict;

function DeliveryDetails() {
  const [details, setDetails] = useState({
    sellerId: 0,
    deliveryAddress: '',
    deliveryNumber: '',
  });
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const newValue = (name === 'sellerId') ? Number(value) : value;

    const newDetails = { ...details, [name]: newValue };
    setDetails(newDetails);
  };

  const getTotalPrice = (cartItems) => {
    const totalOrder = cartItems.reduce((acc, curr) => acc + curr.subTotal, 0);
    return Number(totalOrder.toFixed(2));
  };

  const postSale = async (sale) => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    const { data } = await axios.post(
      'http://localhost:3001/sales',
      { sale },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );
    return data;
  };

  const handleCheckout = async () => {
    const products = JSON.parse(localStorage.getItem('carrinho'));
    const totalPrice = getTotalPrice(products);
    const saleDate = new Date();
    const sale = { ...details, totalPrice, saleDate, status: 'Pendente', products };
    try {
      const { saleId } = await postSale(sale);
      navigate(`/customer/orders/${saleId}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="order-address-details">
      <div className="order-address-details-inputs">
        <SellersSelect handleChange={ handleChange } />
        <InputText
          controlName="deliveryAddress"
          fieldLabelName="Endereço"
          dataTestId={ dataTestId30 }
          handleChange={ handleChange }
        />
        <InputText
          controlName="deliveryNumber"
          fieldLabelName="Número"
          dataTestId={ dataTestId31 }
          handleChange={ handleChange }
        />
      </div>
      <button
        type="submit"
        data-testid={ dataTestId32 }
        onClick={ handleCheckout }
      >
        Finalizar pedido
      </button>
    </div>
  );
}

export default DeliveryDetails;
