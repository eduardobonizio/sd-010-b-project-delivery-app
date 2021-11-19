import React from 'react';
import User from './User';
import './User.scss';

function UserList() {
  return (
    <div className="user-list">
      <h3>Lista de usuários</h3>
      <div className="row">
        <div className="col">
          <span>Item</span>
        </div>
        <div className="col">
          <span>Nome</span>
        </div>
        <div className="col">
          <span>E-mail</span>
        </div>
        <div className="col">
          <span>Tipo</span>
        </div>
        <div className="col">
          <span>Excluir</span>
        </div>
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
