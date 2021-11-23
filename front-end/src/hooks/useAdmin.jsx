import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { removeUserApi } from '../api/admin';

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users, user]);
  }

  async function removeUser(email) {
    await removeUserApi(email);
    const removedUser = users.filter((user) => user.email !== email);
    setUsers(removedUser);
  }

  return (
    <AdminContext.Provider value={ { users, setUsers, addUser, removeUser } }>
      { children }
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  return context;
}

AdminProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes).isRequired,
};
