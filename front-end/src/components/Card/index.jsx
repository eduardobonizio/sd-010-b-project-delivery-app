import React from 'react';
import PropTypes from 'prop-types';

import { Card } from './styles';

const CardComponent = ({ children }) => (
  <Card>
    { children }
  </Card>
);

export default CardComponent;

CardComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
