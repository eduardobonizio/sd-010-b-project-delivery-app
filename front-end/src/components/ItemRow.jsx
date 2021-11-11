import React from 'react';

function ItemRow() {
  return (
    <div className="conteiner border">
      <div className="row">
        <div className="col">
          1 of 3
        </div>
        <div className="col-md-auto">
          Variable width content
        </div>
        <div className="col col-lg-2">
          3 of 3
        </div>
      </div>
    </div>
  );
}

export default ItemRow;
