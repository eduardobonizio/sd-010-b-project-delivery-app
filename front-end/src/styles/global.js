import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  :root {
    --primary: #408C9C;
    --white: #ffffff;
    --background: #d9d9d9;
    --red: #D04848;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }
`;

export default globalStyle;
