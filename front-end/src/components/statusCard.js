import PropTypes from 'prop-types';
import React from 'react';

export default function StatusCard({ product, arrayDataTestid }) {
  return (
    <div>
      <p
        data-testid={ `${arrayDataTestid[0]}${product.seller_id}` }
      >
        {product.id}
      </p>
      <p
        data-testid={ `${arrayDataTestid[1]}${product.seller_id}` }
      >
        {product.status}
      </p>
      <p
        data-testid={ `${arrayDataTestid[2]}${product.seller_id}` }
      >
        {product.sale_date}
      </p>
      <p
        ata-testid={ `${arrayDataTestid[3]}${product.seller_id}` }
      >
        {product.total_price}
      </p>
      <p
        data-testid={ `${arrayDataTestid[4]}${product.seller_id}` }
      >
        {`${product.delivery_adress}`}
      </p>
    </div>
  );
}

StatusCard.propTypes = {
  arrayDataTestid: PropTypes.array,
  product: PropTypes.shape({
    delivery_adress: PropTypes.string,
    id: PropTypes.number,
    sale_date: PropTypes.string,
    seller_id: PropTypes.number,
    status: PropTypes.string,
    total_price: PropTypes.number,
  }),
}.isRequired;
