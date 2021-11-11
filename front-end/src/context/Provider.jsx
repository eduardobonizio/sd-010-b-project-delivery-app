import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [context, setContext] = useState([]);

  const state = {
    context,
    setContext,
  };

  return (
    <Context.Provider value={ state }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
