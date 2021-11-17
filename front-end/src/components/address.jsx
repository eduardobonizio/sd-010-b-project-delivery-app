import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/user';

function Address() {
  const [users, setUsers] = useState([]);

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
          <select data-testid="customer_checkout__select-seller">
            {users.map((user, index) => <option key={ index }>{ user.name }</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="endereço">
            Endereço
            <input data-testid=" customer_checkout__input-address" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="numero">
            Número
            <input data-testid="customer_checkout__input-addressNumber" type="text" />
          </label>
        </div>
      </form>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="submit"
      >
        Finalizar pedido
      </button>
    </main>
  );
}

export default Address;
