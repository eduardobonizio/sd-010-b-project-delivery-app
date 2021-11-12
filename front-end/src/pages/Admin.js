import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ButtonRegiter from '../components/ButtonRegiter';
import NavBar from '../components/navBar';
import RegisterForm from '../components/RegisterForm';
import handleFetchRegister from '../services/fetchAPIRegister';

export default function Admin() {
  const [isValidEntry, setIsValidEntry] = useState(true);
  const history = useHistory();

  const { render, name, email, password } = RegisterForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await handleFetchRegister(name, email, password);
    localStorage.setItem('user', JSON.stringify(res));
    if (res.message) {
      setIsValidEntry(false);
    } else {
      history.push('/customer/products');
    }
  };

  return (
    <>
      <NavBar />
      <form onSubmit={ handleSubmit }>
        { render }
        <ButtonRegiter
          name={ name }
          email={ email }
          password={ password }
          valid={ isValidEntry }
        />
      </form>
    </>
  );
}
