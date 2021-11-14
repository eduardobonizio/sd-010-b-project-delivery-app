import styled from 'styled-components';

export const ContainerGeneric = styled.div`
  height: 100%;
  display: flex;
`;

export const Header = styled.nav`
  width: 100vw;
  height: 70px;
  display: flex;
  flex-direction: row;
  background: #3E7C17;
  justify-content: space-between;

  .link__navbar {
    text-decoration: none;
  }
`;

export const ContainerTextProducts = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #4E9F3D;

  :hover {
      background: #D8E9A8;
      transform: scale(1.1);
    }
`;

export const TextNavBar = styled.p`
  color: #000;
  font-weight: 800;
  font-size: 24px;
`;

export const ContainerPedidos = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #3E7C17;
  :hover {
      background: #D8E9A8;
      transform: scale(1.1);
    }
`;

export const ContainerName = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #3E065F;

  :hover {
      background: #D8E9A8;
      transform: scale(1.1);
    }
`;

export const ContainerLogout = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #193498;

  :hover {
      background: #D8E9A8;
      transform: scale(1.1);
    }
`;
