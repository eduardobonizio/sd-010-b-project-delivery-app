import React from 'react';
import OrderContainer from '../../components/OrderContainer';
import Context from '../../provider/Provider';

function ProductOrders() {
  const {ordered, setOrdered} = React.useContext(Context);

  const orderedArray = [
    {
      id: 1,
      saleDate: '2020-04-01',
      status: 'Pendente',
      totalPrice: 'R$ 100.00',
    },
    {
      id: 2,
      saleDate: '2020-04-02',
      status: 'Em Trânsito',
      totalPrice: 'R$ 200.00',
    },
  ];
}

useEffect(() => {
  setOrdered(orderedArray);
}, []);

return (
  <div>
    {ordered.map((order) => (
      <OrderContainer key={order.id} order={order} />
    ))}
  </div>
);

export default ProductOrders;