// import axios from 'axios';
import moment from 'moment';
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import LoginContext from '../../context/LoginContext';
// import PropTypes from 'prop-types';
// import moment from 'moment';
import OrdersTable from './OrdersTable';

function OrderCardDetail() {
  const { orders, sellerInfo } = useContext(LoginContext);
  // const [seller, setSeller] = useState([]);
  // const orderId = useParams();
  const { id } = useParams();
  const orderDetail = orders.find((el) => el.id === parseInt(id, 10));
  console.log('ordersDetails', orderDetail);
  const { sale_date: saleDate, status } = orderDetail;

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/users/${sellerId}`)
  //     .then(({ data }) => {
  //       setSeller(data);
  //       console.log('data', data);
  //     });
  // }, [sellerId]);
  const formatDate = moment(saleDate).format('DD/MM/YYYY');
  console.log(sellerInfo);
  return (
    sellerInfo
      ? (
        <div>
          <section style={ { display: 'flex', justifyContent: 'space-around' } }>
            <p
              data-testid="customer_order_details__element-order-details-label-order-id"
            >
              { `PEDIDO: ${orderDetail.id}` }
            </p>
            <p
              data-testid="customer_order_details__element
              -order-details-label-seller-name"
            >
              { sellerInfo.name }
            </p>
            <p
              data-testid="customer_order_details__element-order-details-label-order-date"
            >
              { `Data Pedido ${formatDate}` }
            </p>
            <p
              data-testid="customer_order_details__element
          -order-details-label-delivery-status"
            >
              { status }
            </p>
            <button
              type="button"
              data-testid="customer_order_details__button-delivery-check"
            >
              Marcar como entregue

            </button>
          </section>
          <section>
            <OrdersTable />
          </section>
        </div>)
      : null
  );
}

// OrderCardDetail.propTypes = {
//   id: PropTypes.number.isRequired,
//   saleDate: PropTypes.string.isRequired,
//   status: PropTypes.string.isRequired,
//   totalPrice: PropTypes.string.isRequired,
// };

export default OrderCardDetail;
