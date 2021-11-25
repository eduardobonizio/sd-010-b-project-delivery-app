import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../context/Context';

export default function DeliveryForm() {
  const { cart, totalCart } = React.useContext(Context);
  const [sellerList, setSellerList] = useState([]);
  const [orderId, setOrderId] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const sellerIdRef = useRef();
  const addressRef = useRef();
  const addressNumberRef = useRef();

  const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  };

  const getSellers = () => {
    fetch('http://localhost:3001/users/sellers')
      .then((response) => response.json())
      .then((data) => setSellerList(data));
  };

  const createSale = () => {
    const requestOptions = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: user.token,

      },
      method: 'POST',
      body: JSON.stringify({ cart,
        sale: {
          user_id: user.id,
          seller_id: sellerIdRef.current.value,
          total_price: totalCart,
          delivery_address: addressRef.current.value,
          delivery_number: addressNumberRef.current.value,
          status: 'Pendente',
        } }),
    };
    fetch('http://localhost:3001/sales/', requestOptions)
      .then((res) => res.json())
      .then((data) => setOrderId(data.sale.id))
      .then(() => setRedirect(true));
  };

  useEffect(() => {
    getSellers();
  }, []);

  // useEffect(() => {
  //   if (redirect) {
  //     history.push(`/customer/orders/${dataSale.sale.id}`);
  //   }
  // }, [redirect]);

  if (redirect) return <Redirect to={ `/customer/orders/${orderId}` } />;
  return (
    <form style={ style }>
      <label htmlFor="seller">
        Vendedor(a):
        <select
          data-testid="customer_checkout__select-seller"
          name="sellers"
          id="sellers"
          ref={ sellerIdRef }
        >
          {sellerList.map((seller) => (
            <option
              value={ seller.id }
              key={ seller.id }
            >
              {seller.name}
            </option>))}
        </select>
        <br />
      </label>
      <label htmlFor="address">
        Endereço:
        <input
          data-testid="customer_checkout__input-address"
          type="text"
          name="address"
          ref={ addressRef }
        />
      </label>
      <label htmlFor="number">
        Número
        <input
          data-testid="customer_checkout__input-addressNumber"
          type="text"
          name="number"
          ref={ addressNumberRef }
        />
      </label>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ createSale }
      >
        Finalizar Pedido
      </button>
    </form>
  );
}
