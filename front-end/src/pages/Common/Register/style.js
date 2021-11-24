import styled from "styled-components";

export const CommonContainer = styled.div`
  @media(max-width: 800px) {
    align-items: center;
    justify-content: center;
  }

  color: #444;

  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const RegisterContainer = styled.div`
  @media(max-width: 800px) {
    display: none;
  }

  background-color: rgb(220, 220, 220);

  align-items: center;
  display: flex;
  justify-content: center;


  height: 100vh;
  width: 50%;


  img {
    max-width: 500px;

    & {
	    -webkit-animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite alternate-reverse both;
	    animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite alternate-reverse both;
    }

    @-webkit-keyframes slide-top {
      0% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
      }
      100% {
        -webkit-transform: translateY(-50px);
                transform: translateY(-50px);
      }
    }
    @keyframes slide-top {
      0% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
      }
      100% {
        -webkit-transform: translateY(-50px);
                transform: translateY(-50px);
      }
    }
  }

`;

export const CommonForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 50%;
  background-color: #036B52;

  @media(max-width: 800px) {
    width: 100%;
  }

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
      color: #036B52;
    }
  }
`;

export const Input = styled.input`
  margin-bottom: 15px;
  border-radius: 6px;
  padding: 15px;
  border: none;
  background-color: rgb(220, 220, 220);
  border: 1px solid rgb(220, 220, 220);

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

export const RegisterButton = styled.button`
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

export const LoginButton = styled.button`
  background: none;
  border: none;
  color: #444;

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
