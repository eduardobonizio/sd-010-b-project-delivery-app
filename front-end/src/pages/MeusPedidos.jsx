import React, { useCallback, useContext, useEffect } from 'react';
import { io } from 'socket.io-client';
import NavBar from '../components/Navbar';
import { getFromLocalStorage } from '../services/helpers/servicesLocalStorage';
import getAllOrders from '../services/apis/getOrders';
import Context from '../context/Context';
import CardMeusPedidos from '../components/CardMeusPedidos';
import * as S from '../styles/MeusPedidos';

function MeusPedidos() {
  const { setOrdersCustomer, ordersCustomer } = useContext(Context);
  // const [newStatus, setNewStatus] = useState(status);
  const socket = io('http://localhost:3001');

  const getPedidos = useCallback(async () => {
    const token = getFromLocalStorage('user');
    const allOrders = await getAllOrders(token);
    await setOrdersCustomer(allOrders);
  }, [setOrdersCustomer]);

  useEffect(() => getPedidos(), [getPedidos, setOrdersCustomer]);
  const token = getFromLocalStorage('user');

  socket.on('preparandoPedido', async () => getPedidos());

  socket.on('pedidoRealizado', async () => getPedidos());

  return (
    <div>
      <NavBar />
      <S.mainContainer>
        <S.contentMeusPedidos>
          {ordersCustomer.map((order) => (
            <CardMeusPedidos
              key={ order.id }
              orders={ order }
              token={ token }
            />
          ))}
        </S.contentMeusPedidos>
      </S.mainContainer>
    </div>
  );
}

export default MeusPedidos;
