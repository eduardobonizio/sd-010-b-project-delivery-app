import React, { useEffect, useState } from 'react';
import { apiGetAllSales } from '../../services/salesProducts/apiRequestSalesProduct';
import * as styles from './styles';

function CardOrdersDetails() {
  const [dataSale, setDataSale] = useState([]);

  useEffect(() => {
    async function getAllSale() {
      const response = await apiGetAllSales();
      setDataSale(response);
    }
    getAllSale();
  }, []);

  console.log(dataSale);

  return (
    <styles.ContainerOrders>

      {
        dataSale.map((value, index) => (
          <styles.CardOrders key={ index }>

            <styles.ContainerNumberOrder>
              <styles.TextNumberOrder
                data-testid={ `seller_orders__element-order-id-${value.id}` }
              >
                Pedido
                {' '}
                <br />
                {value.id}
              </styles.TextNumberOrder>
            </styles.ContainerNumberOrder>

            <styles.ContainerStatusPriceDateAddress>

              <styles.ContainerStatusPrice>
                <styles.ContainerStatus>
                  <styles.TextStatusOrder
                    data-testid={ `seller_orders__element-delivery-status-${value.id}` }
                  >
                    {value.status}
                  </styles.TextStatusOrder>
                </styles.ContainerStatus>

                <styles.ContainerDatePrice>
                  <styles.TextDateOrder
                    data-testid={ `seller_orders__element-order-date-${value.id}` }
                  >
                    {value.saleDate}
                  </styles.TextDateOrder>

                  <styles.TextPriceOrder
                    data-testid={ `seller_orders__element-card-price-${value.id}` }
                  >
                    {`R$ ${value.totalPrice}`}
                  </styles.TextPriceOrder>
                </styles.ContainerDatePrice>
              </styles.ContainerStatusPrice>

              <styles.ContainerAddress>
                <styles.TextAddressOrder
                  data-testid={ `seller_orders__element-card-address-${value.id}` }
                >
                  {`${value.deliveryAddress}, ${value.deliveryNumber}`}
                </styles.TextAddressOrder>
              </styles.ContainerAddress>

            </styles.ContainerStatusPriceDateAddress>

          </styles.CardOrders>
        ))
      }

    </styles.ContainerOrders>
  );
}

export default CardOrdersDetails;
