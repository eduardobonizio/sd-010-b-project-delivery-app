import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
// import Loading from './Loading';

function OrderDetails({ id }) {
  const [productDetails] = useState([
    { d: 3, description: 'legal', quantity: 3, unityValue: 7.90, total: 7.90 },
    { d: 4, description: 'legal', quantity: 3, unityValue: 7.90, total: 7.90 }]);
  console.log(productDetails);
  // const [loading, setLoading] = useState(true);
  console.log(id);
  const number3 = 3;
  const vendedor = 'Thiago Leite';
  const data = 'hoje';
  const status = 'entregue';

  // useEffect(() => {
  //   const fetchProductDetails = async () => {
  //     const productInfo = await axios.get('http://google.com.br');
  //     console.log(productInfo);
  //     setProductDetails([{ id: 1, description: 'legal' }]);
  //     setLoading(false);
  //   };
  //   fetchProductDetails();
  // });

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <main>
      Detalhes do pedido
      <div>
        {`PEDIDO ${number3}; Vendedor(a): ${vendedor}; Data ${data} ${status}`}
        <button type="button">MARCAR COMO ENTREGUE</button>
      </div>
      <div>
        {
          productDetails.map((product) => (
            // eslint-disable-next-line max-len
            <span key={ product.d }>
              <span>{product.d}</span>
              <span>{product.description}</span>
              <span>{product.quantity}</span>
              <span>{product.unityValue}</span>
              <span>{product.total}</span>
            </span>
          ))
        }
      </div>
    </main>
  );
}

OrderDetails.propTypes = {
  id: PropTypes.string,
};

OrderDetails.defaultProps = {
  id: '',
};

export default OrderDetails;
