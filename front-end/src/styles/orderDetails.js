import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
`;

export const ContainerTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
`;

export const ContainerBox = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    margin-right: 20px;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const Item = styled.span`
  flex: 1;
`;

export const Description = styled.span`
  flex: 10;
`;

export const Quantity = styled.span`
  flex: 3;
`;

export const UnitPrice = styled.span`
  flex: 3;
`;

export const SubTotal = styled.span`
  flex: 3;
`;

export const Total = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: right;
`;
