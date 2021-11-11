import React from 'react';
import { signup } from './functions';

function Form() {
  return (
    <div className="d-flex justify-content-center">
      <div className="row d-flex flex-column bg-secondary py-4">
        <p className="text-center">Cadastro</p>
        <div className="col">
          <span className="form-label">Nome</span>
          <input type="text" name="name" id="name" className="form-control" />
        </div>
        <div className="col">
          <span className="form-label">Email</span>
          <input type="text" name="email" id="email" className="form-control" />
        </div>
        <div className="col">
          <span className="form-label">Senha</span>
          <input
            type="text"
            name="password"
            id="password"
            className="form-control"
          />
        </div>
        <div className="col mt-2">
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={ `${signup()}` }
          >
            CADASTRAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
