import styled from 'styled-components';

export const mainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content:center;
  justify-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  `;

export const titleAdmin = styled.h1`
  padding-top: 30px;
  padding-bottom: 30px;
color: #FFC500;

  `;

export const formAdmin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-items: center;
  `;

export const legend = styled.legend`
color: #FFC500;
`;

export const containerSelect = styled.div`
padding: 0px 20px 0px 20px;
`;

export const containerButton = styled.div`
padding: 0px 20px 0px 20px;
`;

export const containerImput = styled.div`
border-radius: 5px;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
`;

export const selectRole = styled.select`
border-radius: 5px;
padding: 0px 20px 0px 20px;
background-color: #730504;
color: #FFC500;

`;

export const buttonCadastrar = styled.button`
border-radius: 5px;
padding: 0px 20px 0px 20px;
background-color: #730504;
color: #FFC500;

font-size: 24px;
`;

// LIST USERS

export const ulUsers = styled.ul`
display: flex;
flex-direction:column;
padding: 0px 20px 0px 20px;
list-style-type: none;
`;

export const liUsers = styled.li`
display: flex;
flex-direction:row;
color: #FFC500;
padding-bottom: 30px;
`;
