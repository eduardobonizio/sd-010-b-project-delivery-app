import React from 'react';
import User from './User';

function UserList() {
  return (
    <div>
      <h5>Lista de usuários</h5>
      <div>
        <span>Item</span>
        <span>Nome</span>
        <span>E-mail</span>
        <span>Tipo</span>
        <span>Excluir</span>
      </div>
      <div>
        <User
          index="1"
          item="1"
          name="José"
          email="email@email.com"
          roleUser="customer"
          onDelete="função"
        />
      </div>
    </div>
  );
}

export default UserList;
