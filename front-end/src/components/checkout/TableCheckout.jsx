import React from 'react';
import BodyTable from './BodyTable';
import HeaderTable from './HeaderTable';
import * as styles from './styles';

function TableCheckout() {
  return (
    <styles.Overflow>
      <styles.Table>
        <styles.TableTheader>
          <HeaderTable />
        </styles.TableTheader>

        <styles.TableTbody>
          <BodyTable />
        </styles.TableTbody>
      </styles.Table>
    </styles.Overflow>
  );
}

export default TableCheckout;
