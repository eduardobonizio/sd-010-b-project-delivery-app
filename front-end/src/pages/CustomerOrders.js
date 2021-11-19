/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import NavBar from '../components/navBar';
import StatusCard from '../components/statusCard';
import { fetchGetSalesByIdCustomer } from '../services/saleAPI';

export default function CustomerOrders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const getAllSales = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const res = await fetchGetSalesByIdCustomer({ id: user.id });

      if (res.message) {
        console.log(res);
      } else {
        console.log(res);
        setAllOrders([...res]);
      }
    };

    getAllSales();
  }, [allOrders]);

  return (
    <div>
      <NavBar isCustomer nameButtonOrder="Meus Pedidos" linkOrder="/customer/orders" />
      <div className="flex flex-wrap items-center justify-start ml-40 mr-40 pt-44">
        {allOrders.length !== 0
          ? allOrders.map((el, index) => (
            <StatusCard
              order={ el }
              type="customer"
              linkDetail="/customer/orders"
              key={ index }
            />
          ))
          : (
            <div
              className="flex flex-col items-center w-full text-2xl font-semibold text-dark-color"
            >
              <p>Você não possui nenhum pedido.</p>
              <img
                className="w-2/6 opacity-50"
                src="/semPedido.svg"
                alt="Imagem de Sem Pedido"
              />
            </div>)}
      </div>
    </div>
  );
}
