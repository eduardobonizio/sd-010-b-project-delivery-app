import React, { useEffect, useState } from 'react';
import TableHeader from './TableHeader';
import ItemRow from './ItemRow';
import dataTestIdDict from '../../utils/dataTestIdDict';

const { dataTestId28 } = dataTestIdDict;

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
    const newTotalPrice = totalPrice || 0;
    return replaceDecimalSeparator(newTotalPrice.toFixed(2));
  };

  return (
    <div className="order-items-table">
      <TableHeader headerItems={ headerItems } />
      <div className="items-container">
        { cart.map((item, index) => (
          <ItemRow
            key={ index }
            cartItem={ {
              item,
              index,
              functions: { removeItem, replaceDecimalSeparator },
            } }
          />
        )) }
      </div>
      <div className="order-total-price" data-testid={ dataTestId28 }>
        {`${getTotalPrice()}`}
      </div>
    </div>
  );
}

export default OrdersItemsTable;
