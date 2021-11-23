import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function OrderDetails({ id }) {
  const [saleDetails, setSaleDetails] = useState([]);
  console.log(saleDetails);
  const [loading, setLoading] = useState(true);
  console.log(id);
  const number3 = 3;
  const vendedor = 'Thiago Leite';
  const data = 'hoje';
  const status = 'entregue';

  useEffect(() => {
    const fetchProductDetails = async () => {
      const productInfo = await axios.get('http://localhost:3001/sales/1');
      setLoading(false);
      setSaleDetails([{ productInfo }]);
    };
    fetchProductDetails();
  }, []);

  if (loading) {
    return <span>Carregando conteúdo</span>;
  }

  return (
    <main>
      Detalhes do pedido
      <div>
        {`PEDIDO ${number3}; Vendedor(a): ${vendedor}; Data ${data} ${status}`}
        <button type="button">MARCAR COMO ENTREGUE</button>
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
