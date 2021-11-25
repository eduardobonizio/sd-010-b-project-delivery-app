import React, { useContext } from 'react';
import LoginContext from '../../context/LoginContext';

export default function TotalOrderButton() {
  const { totalPrice } = useContext(LoginContext);
  return (
    <button type="button">
      { `Total: R$ ${totalPrice}` }
    </button>
  );
}
