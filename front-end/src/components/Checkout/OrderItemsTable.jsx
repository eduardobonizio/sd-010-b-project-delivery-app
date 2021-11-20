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

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(newCart));
    setCart(newCart);
  };

  const replaceDecimalSeparator = (value) => value.replace('.', ',');

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((acc, curr) => acc + curr.subTotal, 0);
    return (!totalPrice) ? 0 : totalPrice.toFixed(2);
  };

  return (
    <div className="order-items-table">
      <TableHeader headerItems={ headerItems } />
      <div className="items-container">
        { cart.map((item, index) => (
          <ItemRow
            key={ index }
            cartItem={ { item, index, functions: { removeItem } } }
          />
        )) }
      </div>
      <div className="order-total-price">{`Total: R$ ${getTotalPrice()}`}</div>
    </div>
  );
}

export default OrdersItemsTable;
