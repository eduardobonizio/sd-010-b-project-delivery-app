import React, { useEffect, useState } from 'react';
import TableHeader from './TableHeader';
import ItemRow from './ItemRow';

const headerItems = [
  'Item', 'Descrição', 'Quantidade', 'Valor unitário', 'Sub-total', 'Remover item',
];

function OrdersItemsTable() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('carrinho'));
    setCart(localCart);
  }, []);

  return (
    <div className="order-items-table">
      <TableHeader headerItems={ headerItems } />
      <div className="items-container">
        { cart.map((item, index) => (
          <ItemRow key={ index } cartItem={ { item, index } } />
        )) }
      </div>
      <div className="order-total-price">Total: R$ 21,00</div>
    </div>
  );
}

export default OrdersItemsTable;
