import React from 'react';

function Form() {
  return (
    <div>
      <div>
        <h3>Cadastrar novo usuario</h3>
        <div>
          <div>
            <span>Nome</span>
            <input type="text" />
          </div>
          <div>
            <span>Email</span>
            <input type="email" />
          </div>
          <div>
            <span>Senha</span>
            <input type="password" />
          </div>
          <select name="" id="">
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Form;
