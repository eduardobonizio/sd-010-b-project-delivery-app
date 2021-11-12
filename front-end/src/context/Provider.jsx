import React, { useState } from 'react';
import PropTypes from 'prop-types';

// ContextAPI
import Context from './Context';

function Provider({ children }) {
  const [value, setValue] = useState(0);
  return (
    <Context.Provider value={ { value, setValue } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
