import styled from 'styled-components';

export const contentMeusPedidos = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 20px;
`;

export const buttonMeusPedidos = styled.button`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 45%;
background: white;
border-radius: 15px;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  transition: all 0.3s ease-out;
  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

export const infoPedido = styled.div`
display: flex;
flex-direction: row;
`;

export const statusPedido = styled.h1`
font-size: 30px;
padding-right: 10px;
background-color: red;
justify-self: center;
align-self: center;
`;
