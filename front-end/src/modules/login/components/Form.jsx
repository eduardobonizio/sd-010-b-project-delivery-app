import React from 'react';
import './form.scss';

function Form() {
  return (
    <div>
      <form action="" className="flex-column align-items-center custom-form p-4">
        <div className="row d-flex flex-column">
          <div className="col">
            <p>E-mail</p>
            <input type="text" name="" id="" className="form-control" />
          </div>
          <div className="col">
            <p>Password</p>
            <input
              type="password"
              placeholder="******"
              name="password"
              data-testid="common_login__input-password"
              className="form-control"
            />
          </div>
          <div className="col mt-2">
            <button
              type="submit"
              data-testid="common_login__button-login"
              className="btn btn-primary w-100"
            >
              LOGIN
            </button>
          </div>
          <div className="col mt-2">
            <button
              type="button"
              data-testid="common_login__button-register"
              className="btn btn-outline-primary w-100"
            >
              Ainda não tenho conta
            </button>
          </div>
        </div>
      </form>
    </div>

  );
}

export default Form;
