import styled from "styled-components";

export const contentProduct = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const eachProduct = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  width: 20vw;
  transition: all 0.3s ease-out;
  &:hover {
    transform: translateY(-8px);
    cursor: pointer;
  }
`;

export const priceProduct = styled.h2`
  background-color: #f2fffc;
  width: 20%;
  border-radius:5px;
`;

export const imgProduct = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  align-self: center;
`;

export const nameProduct = styled.p`
  font-family: Roboto;
  font-style: normal;
  align-self: center;
  font-size: 20px;
`;
export const qtyProduct = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

export const buttonProduct = styled.button`
  background: #036b52;
  color: #fff;
  border: 1px;
  border-radius: 20%;
`;
export const inputProduct = styled.input`
  width: 10%;
`;
