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

  background-color: green;
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
`;

export const CommonInput = styled.input`
  margin-bottom: 15px;
  border-radius: 6px;

  height: 35px;
  width: 200px;
`;

export const InputLabel = styled.label`
  font-family: 'Dongle', sans-serif;
  font-size: 2rem;
  line-height: 0.8;
`;

export const LoginButton = styled.button`
  background-color: green;
  border-radius: 6px;
  border: none;
  box-shadow: 0 0 0.5em rgb(160, 160, 160);
  color: white;

  font-family: 'Dongle', sans-serif;
  font-weight: 400;
  font-size: 2rem;

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

  font-family: 'Dongle', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  margin-top: 10px;

  height: 30px;
  width: 200px;

  &:hover {
    color: green;
    cursor: pointer;
    transform: scale(1.1);
  }
`;
