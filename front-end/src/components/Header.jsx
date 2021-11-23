import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import dataTestId from '../utils/dataTestIdDict';
import '../styles/Header.css';

const { dataTestId11, dataTestId12, dataTestId13, dataTestId14 } = dataTestId;

function Header({ userRole }) {
  const [nameStorage, setNameStorage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const nameLocalStorage = JSON.parse(localStorage.getItem('user'));
    setNameStorage(nameLocalStorage.name);
  }, []);

  const leaveThePage = () => {
    localStorage.clear();
    navigate('/login');
  };

  const customer = () => (
    <>
      <div data-testid={ dataTestId11 }>
        <Link to="/customer/products">PRODUTOS</Link>
      </div>
      <div data-testid={ dataTestId12 }>
        <Link to="/customer/orders">MEUS PRODUTOS</Link>
      </div>
    </>
  );

  const seller = () => (
    <div data-testid={ dataTestId12 }>
      <Link to="/seller/orders">PEDIDOS</Link>
    </div>
  );

  const administrator = () => (
    <div data-testid={ dataTestId12 }>
      <Link to="/admin/manage">GERENCIAR USUÁRIOS</Link>
    </div>
  );

  const headerComponents = {
    customer,
    seller,
    administrator,
  };

  return (
    <header>
      <nav>
        { headerComponents[userRole]() }
        <div
          data-testid={ dataTestId13 }
          style={ { gridColumnStart: 4 } }
          className="purple"
        >
          <Link to="/login">{ nameStorage }</Link>
        </div>
        <div className="blue">
          <Link
            data-testid={ dataTestId14 }
            to="/login"
            onClick={ leaveThePage }
          >
            Sair

          </Link>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  userRole: PropTypes.string.isRequired,
};

export default Header;
