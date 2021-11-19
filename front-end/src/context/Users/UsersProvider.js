import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UsersContext from './UsersContext';

function UsersProvider({ children }) {
  // Seller States
  const [sellerId, setSellerId] = useState(0);

  // Customer
  const TEST_USER_ID = 3;
  const [userId, setUserId] = useState(TEST_USER_ID);
  const [userAddress, setUserAddress] = useState('');
  const [userAddressNumber, setUserAddressNumber] = useState('');

  const contextValue = {
    sellerId,
    setSellerId,
    userId,
    setUserId,
    userAddress,
    setUserAddress,
    userAddressNumber,
    setUserAddressNumber,
  };

  return (
    <UsersContext.Provider value={ contextValue }>
      { children }
    </UsersContext.Provider>
  );
}

UsersProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default UsersProvider;
