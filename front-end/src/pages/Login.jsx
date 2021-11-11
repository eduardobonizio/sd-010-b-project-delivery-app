import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setEmail, setPassword } from '../actions';

function Login() {
  const [email, setStateEmail] = useState();
  const [password, setStatePassword] = useState();
  const [disabled, setDisable] = useState(true);

  const changeDisabled = () => {
    if (email && password) {
      setDisable(false);
    }
  };

  const dispatchOnSubmit = () => {
    dispatchEmail(email);
    dispatchPassword(password);
  };

  return (
    <div className="login">
      <p>LOGIN</p>
      <input type="text" onChange={ (e) => setStateEmail(e.target.value) } />
      <input
        type="password"
        onChange={ (e) => {
          setStatePassword(e.target.value);
          changeDisabled();
        } }
      />
      <button
        type="button"
        disabled={ disabled }
        onClick={ dispatchOnSubmit }
      >
        login
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  email: dispatch(setEmail(email)),
  password: dispatch(setPassword(password)),
});

export default connect(null, mapDispatchToProps)(Login);
