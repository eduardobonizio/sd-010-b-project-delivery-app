import React from 'react';
import dataTestIdDict from '../../utils/dataTestIdDict';
import InputText from './InputText';
import SellersSelect from './SellersSelect';

const { dataTestId30, dataTestId31, dataTestId32 } = dataTestIdDict;

function DeliveryDetails() {
  return (
    <div className="order-address-details">
      <div className="order-address-details-inputs">
        <SellersSelect sellers={ ['Fulana', 'Cicrano', 'Beltrano'] } />
        <InputText
          controlName="address"
          fieldLabelName="Endereço"
          dataTestId={ dataTestId30 }
        />
        <InputText
          controlName="number"
          fieldLabelName="Número"
          dataTestId={ dataTestId31 }
        />
      </div>
      <button type="submit" data-testid={ dataTestId32 }>Finalizar pedido</button>
    </div>
  );
}

export default DeliveryDetails;
