import React, { useState } from 'react';
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

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const newValue = (name === 'sellerId') ? Number(value) : value;

    const newDetails = { ...details, [name]: newValue };
    setDetails(newDetails);
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
