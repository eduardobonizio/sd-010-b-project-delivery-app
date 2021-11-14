import PropTypes from 'prop-types';
import React from 'react';
import { useParams } from 'react-router-dom';
import OrderNavBar from '../components/orderNavBar';
import TableProducts from '../components/tableProducts';
import fetchGetSaleProducts from '../services/saleProductsAPI';

export default function SellerDetailOrder() {
  const [allProducts, setAllProducts] = useState([]);
  const [sale, setSale] = useState({});
  const [dataTestIdsNav] = useState([
    'seller_order_details__element-order-details-label-order-id',
    'seller_order_details__element-order-details-label-order-date',
    'seller_order_details__button-preparing-check',
    'seller_order_details__button-dispatch-check',
  ]);
  const [dataTestIdsProducts] = useState([
    ' seller_order_details__element-order-table-item-number-',
    'seller_order_details__element-order-table-name-',
    'seller_order_details__element-order-table-quantity-',
    'seller_order_details__element-order-table-unit-price-',
    'seller_order_details__element-order-table-sub-total-',
  ]);

  const { id } = useParams();

  useEffect(() => {
    const getSale = async () => {
      const res = await fetchGetSaleProducts({ id });

      if (res.message) {
        console.log(res);
      } else {
        setSale({ ...res });
        setAllProducts([...res.products]);
      }
    };

    getSale();
  }, [id]);

  return (
    <div>
      <p>Detalhe do pedido</p>
      <OrderNavBar
        arrayDataTestid={ dataTestIdsNav }
        order={ sale }
        isSeller
        status="A Caminho"
        textButton="SAIU PARA ENTREGA"
      />
      <TableProducts arrayDataTestid={ dataTestIdsProducts } products={ allProducts } />
      <p>{sale.total_price && `Total: R$ ${sale.total_price}`}</p>
    </div>
  );
}

SellerDetailOrder.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
