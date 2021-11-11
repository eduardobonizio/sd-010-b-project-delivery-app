import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export default function Provider({ children }) {
  // Criar os estados aqui para compartilhar com a aplicação
  return (
    <Context.Provider>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
