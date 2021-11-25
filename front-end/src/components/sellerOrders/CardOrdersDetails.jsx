import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../context/Context';
import formatDate from '../../helpers/formatDate';
import {
  apiGetAllSales,
  apiRequestOrdersByID,
} from '../../services/salesProducts/apiRequestSalesProduct';
import * as styles from './styles';

function CardOrdersDetails() {
  const { setSalleProduct, setProducts } = useContext(MyContext);
  const [dataSale, setDataSale] = useState([]);

  useEffect(() => {
    async function getAllSale() {
      const response = await apiGetAllSales();
      setDataSale(response);
    }
    getAllSale();
  }, []);

  async function handleOnClick({ target }) {
    const { id } = target;
    const response = await apiRequestOrdersByID(id);
    const products = response.map((value) => value.products);
    setSalleProduct(response);
    setProducts(products[0]);
  }

  return (
    <styles.ContainerOrders>

      {
        dataSale.map((value, index) => (
          <Link
            id={ value.id }
            onClick={ (event) => handleOnClick(event) }
            key={ index }
            to={ `/seller/orders/${value.id}` }
          >
            <styles.CardOrders>

              <styles.ContainerNumberOrder id={ value.id }>
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

                <styles.ContainerStatusPrice id={ value.id }>
                  {/* <styles.ContainerStatus> */}
                  <styles.TextStatusOrder
                    id={ value.id }
                    data-testid={ `seller_orders__element-delivery-status-${value.id}` }
                  >
                    {value.status}
                  </styles.TextStatusOrder>
                  {/* </styles.ContainerStatus> */}

                  {/* <styles.ContainerDatePrice> */}
                  <styles.TextDateOrder
                    id={ value.id }
                    data-testid={ `seller_orders__element-order-date-${value.id}` }
                  >
                    {formatDate(value.saleDate)}
                  </styles.TextDateOrder>

                  <styles.TextPriceOrder
                    id={ value.id }
                    data-testid={ `seller_orders__element-card-price-${value.id}` }
                  >
                    {`R$ ${value.totalPrice}`}
                  </styles.TextPriceOrder>
                  {/* </styles.ContainerDatePrice> */}
                </styles.ContainerStatusPrice>

                <styles.ContainerAddress id={ value.id }>
                  <styles.TextAddressOrder
                    id={ value.id }
                    data-testid={ `seller_orders__element-card-address-${value.id}` }
                  >
                    {`${value.deliveryAddress}, ${value.deliveryNumber}`}
                  </styles.TextAddressOrder>
                </styles.ContainerAddress>

              </styles.ContainerStatusPriceDateAddress>

            </styles.CardOrders>
          </Link>
        ))
      }

    </styles.ContainerOrders>
  );
}

export default CardOrdersDetails;
