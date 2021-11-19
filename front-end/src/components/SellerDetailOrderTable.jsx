import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import formatId from '../helpers/formatId';
import api from '../api/index';
import Context from '../context/Context';
import SellerRenderOrderDetails from './SellerRenderOrderDetails';

const SellerDetailOrderTable = () => {
  const { id } = useParams();
  const { saleData, setSaleData } = useContext(Context);
  const [isFetched, setIsFetched] = useState(false);
  const getSaleAndSaveInState = async () => {
    const { data } = await api.getSale(id);
    const seller = await api.getSeller(data.seller_id);
    setSaleData({ ...data, sellerName: seller.data.name });
    setIsFetched(!isFetched);
  };

  const formattedDate = () => new Date(saleData.sale_date)
    .toLocaleString('pt-br').split(' ')[0];

  const a = 'seller_order_details__element-order-details-label-delivery-status';

  const renderButtons = () => (
    <>
      <th>
        {' '}
        <button
          disabled
          type="button"
          data-testid="seller_order_details__button-preparing-check"
        >
          PREPARAR PEDIDO

        </button>

      </th>
      <th>
        {' '}
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
        >
          SAIU PARA ENTREGA
        </button>

      </th>
    </>
  );

  const renderTable = () => (
    <div>
      <table>
        <thead>
          <tr>
            <th data-testid="seller_order_details__element-order-details-label-order-id">
              PEDIDO
              {' '}
              {formatId(id)}
            </th>
            <th
              data-testid="seller_order_details__element-order-details-label-seller-name"
            >
              P.Vend:
              {' '}
              {saleData.sellerName}
            </th>
            <th
              data-testid="seller_order_details__element-order-details-label-order-date"
            >
              {formattedDate()}
            </th>
            <th
              data-testid={ a }
            >
              {saleData.status}
            </th>
            {renderButtons()}
          </tr>
        </thead>
        <SellerRenderOrderDetails />
      </table>
      <div data-testid="seller_order_details__element-order-total-price">
        {`Total: R$ ${saleData.total_price.replace('.', ',')}`}
      </div>
    </div>
  );

  useEffect(() => {
    getSaleAndSaveInState();
    // eslint-disable-next-line
  }, []);

  return (
    isFetched
      ? renderTable() : <h1>Loading</h1>);
};

export default SellerDetailOrderTable;
