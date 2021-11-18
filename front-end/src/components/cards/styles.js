import styled from 'styled-components';

export const ContainerListCard = styled.div`
  width: 90vw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
`;

export const ContainerCard = styled.div`
  width: 200px;
  height: 300px;
  /* background: pink; */
  margin: 10px;
  margin-bottom: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  border: solid 0.5px #B8B8B8;
  filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.2));
`;

export const ContainerQuantity = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #EAE7C6;
  border-radius: 5px;
`;

export const ContainerInput = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
`;

export const InputQuantity = styled.input`
  width: 35px;
  height: 25px;
  border: none;
  text-align: center;
`;

export const ButtonQuantitySum = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 0 5px 5px 0;
  border: none;
  background: #4E9F3D;
  color: #FFF;
  font-size: 18px;
  font-weight: 900;
`;

export const ButtonQuantitySubtract = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 5px 0 0 5px;
  border: none;
  background: #4E9F3D;
  color: #FFF;
  font-size: 20px;
  font-weight: 900;
`;

export const CotainerPrice = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(216, 216, 216, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 7px;
`;

export const TextPrice = styled.p`
  color: #000;
  font-weight: 1000;
  margin: 0;
`;

export const TextName = styled.p`
  font-size: 14px;
  margin: 5px;
  color: #000;
`;

export const ImageProduct = styled.img`
  width: 100%;
  height: 100%;
`;

export const ButtonCart = styled.button`
  width: 250px;
  height: 40px;
  position: fixed;
  bottom: 10px;
  right: 60px;
  background: #4E9F3D;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 800;
  font-size: 18px;
  color: #000;
`;

export const TextTotalCart = styled.span`
  font-weight: 800;
  font-size: 18px;
  color: #000;
`;
