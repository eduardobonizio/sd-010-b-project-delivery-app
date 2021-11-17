import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export default function Provider({ children }) {
  // Criar os estados aqui para compartilhar com a aplicação
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const objectStates = {
    products,
    setProducts,
    total,
    setTotal,
  };
  return (
    <Context.Provider value={ objectStates }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
