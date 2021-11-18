import React from 'react';
import * as styles from './styles';

const tableHeader = [
  'Item',
  'Descrição',
  'Quantidade',
  'Valor Unitário',
  'Sub-total',
  'Remover Item',
];

function HeaderTable() {
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
