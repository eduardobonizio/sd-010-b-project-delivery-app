import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUsers } from '../services/user';

function Address(props) {
  const [users, setUsers] = useState([]);

  const { clickFuntion, postFunction } = props;

  const fetchData = async () => {
    const usersData = await getUsers();
    const sellers = usersData.data.filter((user) => user.role === 'seller');
    setUsers(sellers);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="main-adress">
      <form className="adress-forms">
        <div>
          <select
            className="address-input"
            data-testid="customer_checkout__select-seller"
            onChange={ clickFuntion }
            name="userName"
          >
            <option className="select-seller" value="null">Selecione um vendedor</option>
            {users.map((user, index) => (
              <option
                className="select-seller"
                key={ index }
                value={ user.id }
              >
                { user.name }
              </option>))}
          </select>
        </div>
        <div>
          <label htmlFor="endereço" className="label-address">
            <input
              className="address-input address-input-e"
              data-testid="customer_checkout__input-address"
              type="text"
              name="address"
              placeholder="endereço"
              onChange={ clickFuntion }
            />
          </label>
        </div>
        <div>
          <label htmlFor="numero" className="label-address">
            <input
              className="address-input number-input-e"
              data-testid="customer_checkout__input-addressNumber"
              type="text"
              name="number"
              placeholder="número"
              onChange={ clickFuntion }
            />
          </label>
        </div>
      </form>
      <button
        className="end-order-button"
        data-testid="customer_checkout__button-submit-order"
        type="submit"
        onClick={ postFunction }
      >
        Finalizar pedido
      </button>
    </main>
  );
}

Address.propTypes = {
  clickFuntion: PropTypes.func.isRequired,
  postFunction: PropTypes.func.isRequired,
};

export default Address;
