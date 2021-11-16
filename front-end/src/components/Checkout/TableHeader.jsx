/* eslint-disable react/prop-types */
import React from 'react';

function TableHeader({ headerItems = [] }) {
  return (
    <div className="table-header">
      { headerItems.map((value) => <div key={ value }>{value}</div>)}
    </div>
  );
}

export default TableHeader;
