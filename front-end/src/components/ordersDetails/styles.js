import styled from 'styled-components';

export const ContainerOrdersDetails = styled.div`
  width: 90%;
  height: 75vh;
  margin: 10px 50px;
`;

export const ContainerTable = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 0.5px #B8B8B8;
  filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.2));
`;

export const ContainerHeaderDetails = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #EAE7C6;
`;

export const ContainerStatusOrder = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFCC1D;
  border-radius: 5px;
`;

export const ButtonPreparing = styled.button`
  width: 200px;
  height: 30px;
  background: #4E9F3D;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  font-weight: 700;
`;

export const ButtonDispatch = styled.button`
  width: 200px;
  height: 30px;
  background: #3E7C17;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  font-weight: 700;
`;

export const Overflow = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

::-webkit-scrollbar {
    width: 15px;
    background: #F4F4F4;
    border-radius: 5px;
}
::-webkit-scrollbar-thumb {
    background: #DAD7D7;
    border-radius: 5px;
}
`;

export const Table = styled.table`
  width: 80%;
  margin-top: 10px;
  border-collapse: separate;
  border-spacing: 0 8px;
  font-weight: 900;
  overflow-x: scroll;
`;

export const TableTheader = styled.thead``;

export const TableTbody = styled.tbody``;

export const TrTable = styled.tr`
  border: 1px #000 solid;
`;

export const TdTable = styled.td`
  height: 30px;
  border-left-width: 0;

  :nth-child(1) {
    border-radius: 5px 0 0 5px;
    text-align: center;
    background:   #4E9F3D;
  }

  :nth-child(2) {
    background: #FFEEEF;
    padding-left: 5px;
  }

  :nth-child(3) {
    background: #3E7C17;
    text-align: center;
    color: #FFF
  }

  :nth-child(4) {
    background: #9C528B;
    text-align: center;
    color: #FFF
  }
  :nth-child(5) {
    background: #2274A5;
    border-radius: 0 5px 5px 0;
    text-align: center;
    color: #FFF
  }
`;

export const TitleHeader = styled.th`
  color: #000;
  font-size: 16px;
  text-align: left;
`;

export const TextNumberOrder = styled.h2``;

export const TextStatusOrder = styled.h2`
  color: red;
`;

export const TextDateOrder = styled.h2``;

export const TextPriceOrder = styled.h2``;

export const TextAddressOrder = styled.h2``;

export const ValueTotal = styled.div`
  position: absolute;
  bottom: 10px;
  right: 50px;
  width: 200px;
  height: 50px;
  background:   #1DB954;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-size: 1.5rem;
  font-weight: 800;
`;
