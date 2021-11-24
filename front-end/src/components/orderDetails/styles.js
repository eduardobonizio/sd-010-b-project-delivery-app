import styled from 'styled-components';

export const ContainerOrders = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardOrders = styled.div`
  width: 600px;
  height: 245px;
  margin-bottom: 20px;
  display: flex;
  border-radius: 5px;
  border: solid 0.5px #B8B8B8;
  filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.2));
`;

export const ContainerNumberOrder = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: peru;
`;

export const ContainerStatusPriceDateAddress = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerStatusPrice = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  background: plum;
`;

export const ContainerStatus = styled.div`
  width: 200px;
  height: 100px;
  margin: 10px 0 0 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  background: white;
`;

export const ContainerDatePrice = styled.div`
  width: 200px;
  height: 100px;
  margin: 10px 0 0 10px;
  background: pink;
`;

export const ContainerAddress = styled.div`
  width: 100%;
  height: 30%;
  text-align: center;
  background: peachpuff;
`;

export const TextNumberOrder = styled.p``;

export const TextStatusOrder = styled.h2``;

export const TextDateOrder = styled.h2``;

export const TextPriceOrder = styled.h2``;

export const TextAddressOrder = styled.h2``;
