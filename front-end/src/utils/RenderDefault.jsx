import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export default function RenderDefault(props) {
  const { path, component } = props;
  return (
    <Route exact path={ path } component={ component } />
  );
}

RenderDefault.propTypes = PropTypes.instanceOf({}).isRequired;
