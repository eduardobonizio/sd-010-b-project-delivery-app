import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFromLocalStorage } from '../../helpers/localStorage';
import apiRequestSalesProduct from '../../services/salesProducts/apiRequestSalesProduct';
import * as styles from './styles';

function DetailsOrder() {
  const [detailsSales, setDetailsSales] = useState(
    { seller: '1', address: '', number: '' },
  );

  const navigate = useNavigate();

  function handleOnchangeDetailsSales(event) {
    const { name, value } = event.target;
    setDetailsSales({
      ...detailsSales,
      [name]: value,
    });
  }

  async function handleOnclickFinishSale(event) {
    event.preventDefault();
    const { seller, address, number } = detailsSales;
    const { id, token } = getFromLocalStorage('user');
    const totalSales = getFromLocalStorage('totalCart');
    const products = getFromLocalStorage('cart');

    const newSales = {
      userId: id,
      sellerId: seller,
      totalPrice: totalSales.toFixed(2),
      deliveryAddress: address,
      deliveryNumber: number,
      products,
    };

    const { data } = await apiRequestSalesProduct(newSales, token);

    navigate(`../customer/orders/${data[0].saleId}`, { replace: true });
  }

  return (
    <styles.ContainerDetatailsOrder>
      <styles.Form
        action="/customer/products"
        method="POST"
        onSubmit={ handleOnclickFinishSale }
      >

        <styles.Label>
          Vendedor(a) Responsável
          <br />
          <styles.InputSelectSalesman
            id="seller"
            name="seller"
            data-testid="customer_checkout__select-seller"
            onChange={ handleOnchangeDetailsSales }
          >
            <option value="1">Vendedor 1</option>
            <option value="2">Vendedor 2</option>
            <option value="3">Vendedor 3</option>
          </styles.InputSelectSalesman>
        </styles.Label>

        <styles.Label>
          Endereço
          <br />
          <styles.InputAddress
            name="address"
            type="text"
            value={ detailsSales.address }
            data-testid="customer_checkout__input-address"
            placeholder="Ex: Avenida Paulista"
            onChange={ handleOnchangeDetailsSales }
          />
        </styles.Label>

        <styles.Label>
          Número
          <br />
          <styles.InputAddressNumber
            name="number"
            value={ detailsSales.number }
            data-testid="customer_checkout__input-addressNumber"
            type="number"
            placeholder="Ex: 2500"
            onChange={ handleOnchangeDetailsSales }
          />
        </styles.Label>

        <styles.ButtonFinishOrder
          onClick={ handleOnclickFinishSale }
          type="submit"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar pedido
        </styles.ButtonFinishOrder>

      </styles.Form>

    </styles.ContainerDetatailsOrder>
  );
}

export default DetailsOrder;
