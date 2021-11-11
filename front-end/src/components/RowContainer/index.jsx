import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles';

const RowContainer = ({ children }) => (
  <Container>
    { children }
  </Container>
);

export default RowContainer;

RowContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
