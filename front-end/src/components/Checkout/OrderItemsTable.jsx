import React from 'react';
import TableHeader from './TableHeader';
import ItemRow from './ItemRow';

const headerItems = [
  'Item', 'Descrição', 'Quantidade', 'Valor unitário', 'Sub-total', 'Remover item',
];

function OrdersItemsTable() {
  return (
    <div className="order-items-table">
      <TableHeader headerItems={ headerItems } />
      <div className="items-container">
        <ItemRow />
      </div>
      <div className="order-total-price">Total: R$ 21,00</div>
    </div>
  );
}

export default OrdersItemsTable;
