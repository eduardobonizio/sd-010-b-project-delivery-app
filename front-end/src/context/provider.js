import React from 'react';

import PropTypes from 'prop-types';
import Context from './context';

function Provider({ children }) {
  // colocas os states
  console.log(children);

  return (
    <main>
      <Context.Provider>
        {children}
      </Context.Provider>
    </main>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
