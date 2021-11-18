import PropTypes from 'prop-types';
import React from 'react';

export default function SelectType(props) {
  const { setRole } = props;
  return (
    <label className="flex flex-inline m-5" htmlFor>
      <select
        className="border-2 border-b-8 border-r-8 text-xl rounded-2xl
        border-yellow-color p-3 bg-white px-10"
        data-testid="admin_manage__select-role"
        onChange={ setRole }
      >
        <option defaultValue value="Customer">Cliente</option>
        <option value="Seller">Vendedor</option>
      </select>
    </label>
  );
}

SelectType.propTypes = {
  setRole: PropTypes.func,
}.isRequired;
