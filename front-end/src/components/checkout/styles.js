import styled from 'styled-components';

export const ContainerCheckout = styled.div`
  width: 90%;
  height: 75vh;
  margin: 10px 50px;
`;

export const TextFinalizeOrder = styled.h3`
  padding-bottom: 5px;
  color: #000;
  font-weight: 700;
`;

export const ContainerTable = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 5px;
  border: solid 0.5px #B8B8B8;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.2));
`;

export const Table = styled.table`
  width: 80%;
  border-collapse: separate;
  border-spacing: 0 8px;
  font-weight: 900;
`;

export const TableTheader = styled.thead``;

export const TableTbody = styled.tbody`
`;

export const TrTable = styled.tr`
  border: 1px #000 solid;
`;

export const TdTable = styled.td`
  height: 30px;
  border-left-width: 0;

  :nth-child(1) {
    border-radius: 5px 0 0 5px;
    text-align: center;
    background:   #4E9F3D
  }

  :nth-child(2) {
    background: #FFEEEF;
    padding-left: 5px;
  }

  :nth-child(3) {
    background: #3E7C17;
    text-align: center;
  }

  :nth-child(4) {
    background: #9C528B;
    text-align: center;
  }
  :nth-child(5) {
    background: #2274A5;
    text-align: center;
  }
`;

export const TitleHeader = styled.th`
  color: #000;
  font-size: 12px;
  text-align: left;
`;

export const ButtonRemove = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0 5px 5px 0;
  background:   #4E9F3D;
  cursor: pointer;
  color: #FFFFFF;
  font-weight: 900;
`;

export const ValueTotal = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 200px;
  height: 50px;
  background:   #3E7C17;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-size: 28px;
  font-weight: 900;
`;

export const InputSelectSalesman = styled.select``;

export const InputAddress = styled.input``;

export const InputAddressNumber = styled.input``;

export const ButtonFinishOrder = styled.button``;
