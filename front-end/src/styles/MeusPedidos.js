import styled from 'styled-components';

export const mainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  justify-items: center;
  `;

export const contentMeusPedidos = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
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
align-items: center;
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

export const statusPedido = styled.div`
background-color: #FAE24D;
align-items: center;
border-radius: 15px;
margin-right: 10px;
margin-left: 10px;
`;

export const textStatus = styled.h1`
font-size: 30px;
padding-right: 10px;
padding-left: 10px;
`;

export const textPrice = styled.h1`
justify-self: center;
align-self: center;
font-size: 18px;
background: #C0D7F0;
border-radius: 5px;
`;

export const textDate = styled.h1`
justify-self: center;
align-self: center;
font-size: 18px;
background: #C0D7F0;
border-radius: 5px;
`;
