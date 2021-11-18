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
    <main>
      <form>
        <div>
          <select
            data-testid="customer_checkout__select-seller"
            onChange={ clickFuntion }
            name="userName"
          >
            <option value="null">Selecione um vendedor</option>
            {users.map((user, index) => (
              <option
                key={ index }
                value={ user.id }
              >
                { user.name }
              </option>))}
          </select>
        </div>
        <div>
          <label htmlFor="endereço">
            Endereço
            <input
              data-testid="customer_checkout__input-address"
              type="text"
              name="address"
              onChange={ clickFuntion }
            />
          </label>
        </div>
        <div>
          <label htmlFor="numero">
            Número
            <input
              data-testid="customer_checkout__input-addressNumber"
              type="text"
              name="number"
              onChange={ clickFuntion }
            />
          </label>
        </div>
      </form>
      <button
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
