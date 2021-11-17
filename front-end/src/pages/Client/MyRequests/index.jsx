import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { apiGetAllSales } from '../../../services/salesProducts/apiRequestSalesProduct';
import Header from '../../../components/navbar';
import * as style from './style';
/* eslint-disable */  // excluir essa linha quando for enviar o requisito para merge ( essa linha desabilita o eslint para que ele nao quebre o projeto)

export default function CustomerSales() {
  // const [sales, setSales] = useState([
  //   { pedido: 1, status: 'pendente', data: '01/01/0000', valor: 1000 },
  // ]);

  const [sales, setSales] = useState([]);

  const getSales = () => {
    const data = apiGetAllSales()
      .then((res) => res)
      .catch((err) => console.log(err));

      setSales(data);
  }

  useEffect(() => {
    getSales();
  }, []);

  // esse useEffect serve apenas para vizualizar o que o GET está colocando dentro do nosso array "sales"
  useEffect(() => {
    console.log(sales);
  }, [sales]);

  /*

  O QUE PRECISA SER FEITO:

  - trocar o index pelo numero do pedido
  - trocar "curr.pedido", "curr.status", "curr.data", etc... pelo nome que vem do banco de dados ex: "curr.sale_id"
  - remover o objeto de dentro de "sales"
  - fazer a integração do frontend com o backend
  - caso necessário, trocar a tag "p" por uma tag específica correspondente

  OBSERVAÇÕES:

  - caso precise mudar algo relacionado ao css, favo utilizar styledComponent para isso.

  */

  return (
    <>
      <Header />
      <style.DetailsContainer>
        {
          sales.map((curr, index) => (
            <Link key={ `link:${index}` } to={ `${index}` }>
              <style.DetailsCard key={ `card:${index}` }>
                <p
                  key={ `pedido:${index}` }
                  data-testid={ `customer_orders__element-order-id-${index}` }
                >
                  { curr.pedido }
                </p>
                <p
                  key={ `status:${index}` }
                  data-testid={ `customer_orders__element-delivery-status-${index}` }
                >
                  { curr.status }
                </p>
                <p
                  key={ `data:${index}` }
                  data-testid={ `customer_orders__element-order-date-${index}` }
                >
                  { curr.data }
                </p>
                <p
                  key={ `valor:${index}` }
                >
                  { curr.valor }
                </p>
              </style.DetailsCard>
            </Link>
          ))
        }
      </style.DetailsContainer>
    </>
  );
}
