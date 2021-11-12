import React from 'react';
import PropTypes from 'prop-types';

// import Header from './Header/Header';

export default function Layout({ children }) {
  return (
    <main>
      {/* <Header /> */}
      {children}
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
