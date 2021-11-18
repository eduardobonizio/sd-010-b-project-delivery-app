import React from 'react';
import APITOKEN from '../api/index';
import OrderCard from '../components/OrderCard';

function DetalhesVendedor() {
  const [ordersState, setOrdersState] = useState([]);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const { token } = userInfo;
    APITOKEN.fetchOrders(token).then((data) => setOrdersState(data));
  }, [ordersState]);

  return (
    <div>
      <h1>Meus Pedidos</h1>
      {
        ordersState.map((order) => <OrderCard key={ order.id } order={ order } />)
      }
    </div>
  );
}

export default DetalhesVendedor;
