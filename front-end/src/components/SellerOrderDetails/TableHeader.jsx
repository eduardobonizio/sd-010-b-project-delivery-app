import React from 'react';

function TableHeader() {
  const headerItems = ['Item', 'Descrição', 'Quantidade', 'Valor unitário', 'Sub-total'];
  return (
    <div className="seller-table-header">
      { headerItems.map((value) => <div key={ value }>{value}</div>)}
    </div>
  );
}

export default TableHeader;
