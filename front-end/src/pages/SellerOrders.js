/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Aos from 'aos';

import NavBar from '../components/navBar';
import StatusCard from '../components/statusCard';
import { fetchGetSalesByIdSeller } from '../services/saleAPI';
import 'aos/dist/aos.css';

export default function SellerOrders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const getAllSales = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const res = await fetchGetSalesByIdSeller({ id: user.id });

      if (res.message) {
        console.log(res);
      } else {
        console.log(res);
        setAllOrders([...res]);
      }
    };

    getAllSales();
  }, []);

  return (
    <div>
      <NavBar isCustomer={ false } nameButtonOrder="Pedidos" linkOrder="/seller/orders" />
      <div className="flex flex-wrap items-center justify-start ml-40 mr-40 pt-44">
        {allOrders.length !== 0
          ? allOrders.map((el, index) => (
            <StatusCard
              order={ el }
              type="seller"
              linkDetail="/seller/orders"
              key={ index }
            />
          ))
          : (
            <div
              className="flex flex-col items-center w-full text-2xl font-semibold text-dark-color"
            >
              <p>Você não possui nenhuma venda.</p>
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
