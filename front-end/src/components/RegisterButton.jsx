import React, { useContext } from 'react';
import DeliveryContext from '../context/DeliveryContext';

function RegisterButton() {
  const { registerForm } = useContext(DeliveryContext);

  console.log(registerForm);

  return (
    <button type="button">
      Registrar-se
    </button>
  );
}

export default RegisterButton;
