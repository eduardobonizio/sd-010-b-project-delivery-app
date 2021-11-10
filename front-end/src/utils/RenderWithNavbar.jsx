import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export default function RenderWithNavabar(props) {
  const { path, component } = props; // Aqui vai receber o NavBar
  const style = {
    width: '100vw',
    height: '10vh',
    backgroundColor: 'lightblue',
    fontSize: '20px',
  };
  return (
    <div>
      <div style={ style }>Uma barra de naveção</div>
      {/* Aqui será renderizado o NavBar */}
      <Route path={ path } component={ component } />
    </div>
  );
}

RenderWithNavabar.propTypes = PropTypes.instanceOf({}).isRequired;
