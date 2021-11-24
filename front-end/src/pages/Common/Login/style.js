import styled from "styled-components";

export const CommonContainer = styled.div`
  @media(max-width: 800px) {
    align-items: center;
    justify-content: center;
  }

  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LoginContainer = styled.div`
  @media(max-width: 800px) {
    display: none;
  }

  background-color: #036B52;
  height: 100vh;
  width: 50%;
`;

export const CommonForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 50%;

  #inputs-group {
    background-color: white;
    padding: 35px;
    border-radius: 15px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    align-items: center;
    display: flex;
    flex-direction: column;

    h1 {
      font-family: 'Baloo Da 2', sans-serif;
      padding: 10px;
    }
  }
`;

export const Input = styled.input`
  margin-bottom: 15px;
  border-radius: 6px;
  padding: 15px;
  border: none;
  background-color: lightgray;
  border: 1px solid lightgray;

  &:focus {
    outline: none;
    border: 1px solid #036B52;
  }
`;

export const InputLabel = styled.label`
  font-family: 'Baloo Da 2', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 0.8;
`;

export const LoginButton = styled.button`
  background-color: #036B52;
  border-radius: 6px;
  border: none;
  box-shadow: 0 0 0.5em rgb(160, 160, 160);
  color: white;

  font-family: 'Baloo Da 2', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;

  margin-top: 10px;
  height: 50px;
  width: 200px;

  &:enabled:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: gray;
  }
`;

export const RegisterButton = styled.button`
  background: none;
  border: none;

  font-family: 'Baloo Da 2', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 10px;

  height: 30px;
  width: 200px;

  &:hover {
    color: #036B52;
    cursor: pointer;
    transform: scale(1.1);
  }
`;
