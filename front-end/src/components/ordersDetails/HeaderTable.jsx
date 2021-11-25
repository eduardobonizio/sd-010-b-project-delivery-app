import React from 'react';
import * as styles from './styles';

function HeaderTable() {
  const tableHeader = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-total',
  ];
  return (
    <styles.TrTable>
      {
        tableHeader.map((th, index) => (
          <styles.TitleHeader key={ index }>
            {th}
          </styles.TitleHeader>
        ))
      }
    </styles.TrTable>
  );
}

export default HeaderTable;
