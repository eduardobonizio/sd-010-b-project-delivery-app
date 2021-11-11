import React from 'react';
import PropTypes from 'prop-types';

import RenderDefault from './utils/RenderDefault';
import RenderWithNavBar from './utils/RenderWithNavbar';

export default function Routes(props) {
  const { navbar } = props;
  return navbar ? <RenderWithNavBar { ...props } /> : <RenderDefault { ...props } />;
}

Routes.propTypes = PropTypes.instanceOf({}).isRequired;
