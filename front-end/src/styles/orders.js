import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #ccc;

  a {
    text-decoration: none;
    height: fit-content;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  background-color: #fff;
  margin: 4px;
  color: #000;
`;

export const CardContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  div:first-child {
    font-size: 12px;
  }
`;

export const CardContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #abc8;
  padding: 8px;
`;

export const CardContainerRightTop = styled.div`
  display: flex;
  margin-bottom: 4px;

  div {
    margin: 4px;
  }
`;

export const CardContainerRightTopLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9c7;
  padding: 10px;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 4px;
`;

// export default Container;
