import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #1D2028;
    -webkit-font-smoothing: antialiased;
    transition: all 0.25s linear;
    color: #fafafa;
  }

  body, input, button {
    font-family: "Roboto", sans-serif;
  }

  h1 {
    font-size: 84px
  }

  button {
    cursor: pointer;
  }
`;


