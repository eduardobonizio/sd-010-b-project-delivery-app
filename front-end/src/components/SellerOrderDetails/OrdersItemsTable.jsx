import React from 'react';
import dataTestIdDict from '../../utils/dataTestIdDict';
import ItemRow from './ItemRow';
import TableHeader from './TableHeader';
import StatusControllers from './StatusControllers';

const headerItems = ['Item', 'Descrição', 'Quantidade', 'Valor unitário', 'Sub-total'];
const { dataTestId64 } = dataTestIdDict;

function OrdersItemsTable() {
  const products = [
    { id: 1, name: 'Skol Lata 250ml', price: '2.20', quantity: 5 },
    { id: 3, name: 'Antarctica Pilsen 300ml', price: '2.49', quantity: 2 },
    { id: 4, name: 'Brahma 600ml', price: '7.50', quantity: 1 },
    { id: 11, name: 'Stella Artois 275ml', price: '3.49', quantity: 2 },
  ];

  const mockResponse = {
    id: 1,
    totalPrice: '30.46',
    deliveryAddress: 'Teste',
    deliveryNumber: '500',
    saleDate: new Date(),
    status: 'Pendente',
    products,
  };

  const replaceDecimalSeparator = (value) => value.replace('.', ',');

  const statusControllersData = {
    id: mockResponse.id,
    saleDate: mockResponse.saleDate,
    status: mockResponse.status,
  };

  return (
    <div className="seller-order-items-table">
      <StatusControllers componentData={ statusControllersData } />
      <TableHeader headerItems={ headerItems } />
      <div className="seller-items-container">
        { mockResponse.products.map((item, index) => (
          <ItemRow
            key={ index }
            cartItem={ {
              item,
              index,
              functions: { replaceDecimalSeparator },
            } }
          />
        )) }
      </div>
      <div className="order-total-price" data-testid={ dataTestId64 }>
        {replaceDecimalSeparator(mockResponse.totalPrice)}
      </div>
    </div>
  );
}

export default OrdersItemsTable;
