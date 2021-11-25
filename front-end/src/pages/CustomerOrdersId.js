import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../context/ContextGlobal';
import NavBar from '../components/NavBar';

function CustomerOrdersId() {
  const { total, setTotal } = useContext(Context);
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const totalProductss = getLocalStorage
      .map((product) => product.totalValue).reduce((acc, curr) => acc + curr, 0);
    setTotal((parseFloat(totalProductss).toFixed(2)));
  }, [selected, setTotal]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('http://localhost:3001/sale-by-user');
      setData(response.data);
    };
    getData();
  }, []);

  useEffect(() => {
    setSelected(JSON.parse(localStorage.getItem('cart')));
  }, []);

  return (
    <div>
      <NavBar />
      <h2>Detalhe do Pedido</h2>
      <div>
        {data.map((item) => (
          <div key={ item.id }>
            <span>{ item.id }</span>
            <span>{ item.seller.name }</span>
            <span>{ item.insertedDate }</span>
            <span>{ item.status }</span>
            <button type="button">MARCAR COMO ENTREGUE</button>
          </div>
        ))}
      </div>
      <div className="checkout-item">
        {selected.map((item, index) => (
          <div key={ item.id }>
            <span
              data-testid={
                `customer_order_details__element-order-table-item-number-${index}`
              }
            >
              { index + 1 }
            </span>
            <span
              data-testid={
                `customer_order_details__element-order-table-name-${index}`
              }
            >
              { item.name }
            </span>
            <span
              data-testid={
                `customer_order_details__element-order-table-quantity-${index}`
              }
            >
              { item.quantity }
            </span>
            <span
              data-testid={
                `customer_order_details__element-order-table-sub-total-${index}`
              }
            >
              { item.price.replace('.', ',') }
            </span>
            <span
              data-testid={
                `customer_order_details__element-order-total-price-${index}`
              }
            >
              { (item.totalValue).toFixed(2).replace('.', ',') }
            </span>
          </div>
        ))}
        <span>
          {total && total.replace('.', ',')}
        </span>
      </div>
    </div>
  );
}

export default CustomerOrdersId;
