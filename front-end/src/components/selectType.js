/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

export default function SelectType(props) {
  const { setRole } = props;
  return (
    <label className="flex m-5 flex-inline" htmlFor>
      <select
        className="p-3 px-10 text-xl bg-white border-2 border-b-8 border-r-8 cursor-pointer focus:outline-none rounded-2xl border-yellow-color"
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
