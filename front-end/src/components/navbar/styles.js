import styled from 'styled-components';

export const ContainerGeneric = styled.div`
  display: flex;
`;

export const Header = styled.nav`
  background: #036B52;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100vw;

  .link__navbar {
    text-decoration: none;
  }
`;

export const ContainerTextProducts = styled.div`
  background: #036B52;
  text-align: center;
  text-transform: uppercase;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    background-color: #048C66;
  }
`;

export const TextNavBar = styled.p`
  color: white;
  font-weight: 800;
  font-size: 16px;
  font-family: 'Baloo Da 2', sans-serif;
  padding: 15px;
`;

export const ContainerPedidos = styled.div`
  text-align: center;
  background: #2FC18C;
  text-transform: uppercase;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    background-color: #08A476;
  }
`;

export const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #421981;
`;

export const ContainerLogout = styled.div`
  text-align: center;
  background: #056CF9;
  text-transform: uppercase;

  width: 150px;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    background-color: #273AAA;
  }
`;
