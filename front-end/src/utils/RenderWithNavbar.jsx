import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export default function RenderWithNavabar(props) {
  const { path, component, navbar } = props; // Aqui vai receber o NavBar
  return (
    <div>
      {navbar}
      {/* <div style={ style }>Uma barra de naveção</div> */}
      {/* Aqui será renderizado o NavBar */}
      <Route path={ path } component={ component } />
    </div>
  );
}

RenderWithNavabar.propTypes = PropTypes.instanceOf({}).isRequired;
