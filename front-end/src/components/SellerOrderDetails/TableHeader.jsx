import PropTypes from 'prop-types';
import React from 'react';

function TableHeader({ headerItems }) {
  return (
    <div className="seller-table-header">
      { headerItems.map((value) => <div key={ value }>{value}</div>)}
    </div>
  );
}

TableHeader.propTypes = {
  headerItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHeader;
