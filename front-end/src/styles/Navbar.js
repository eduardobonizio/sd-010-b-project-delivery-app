import styled from 'styled-components';

export const navBar = styled.nav` 
  display:flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  background-color: #333333;
`;

export const buttonNav = styled.button` 
  background-color: #333333;
  border: 2px solid #FFC500;
  border-radius: 20px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  &:hover {
    background-color:#FFC500
  }
`;

export const divLeft = styled.div`
  margin-left: 10px;
`;

export const divRight = styled.div`
  margin-right: 10px;
`;

export const spanName = styled.span`
  color: white;
  font-size: 20px;
  margin: 4px 10px;
  text-align: center;
  padding: 15px 30px;
`;
