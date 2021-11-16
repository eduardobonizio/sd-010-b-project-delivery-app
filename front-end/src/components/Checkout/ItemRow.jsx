import React from 'react';

const dataTestIds = {
  itemNumber: 'customer_checkout__element-order-table-item-number-',
  name: 'customer_checkout__element-order-table-name-',
  quantity: 'cutomer_checkout__element-order-table-quantity-',
  unitPrice: 'customer_checkout__element-order-table-unit-price-',
  subTotal: 'customer_checkout__element-order-table-sub-total-',
  remove: 'customer_checkout__element-order-table-remove-',
};

const { itemNumber, name, quantity, unitPrice, subTotal, remove } = dataTestIds;

function ItemRow() {
  return (
    <div className="item-row">
      <div data-testid={ itemNumber }>1</div>
      <div data-testid={ name }>Salgadinho Torcida Churrasco</div>
      <div data-testid={ quantity }>1</div>
      <div data-testid={ unitPrice }>R$ 3,50</div>
      <div data-testid={ subTotal }>R$ 10,50</div>
      <div data-testid={ remove }>Remover</div>
    </div>
  );
}

export default ItemRow;
