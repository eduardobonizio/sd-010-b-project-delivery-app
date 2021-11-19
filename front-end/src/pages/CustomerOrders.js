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
      <div className="flex flex-wrap ml-52 mr-52 pt-44 items-center justify-start">
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
              className="w-full text-dark-color font-semibold text-2xl flex flex-col
              items-center"
            >
              <p>Você não possui nenhum pedido.</p>
              <img
                className="opacity-50 w-2/6"
                src="/semPedido.svg"
                alt="Imagem de Sem Pedido"
              />
            </div>)}
      </div>
    </div>
  );
}
