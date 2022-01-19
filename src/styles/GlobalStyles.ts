import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    scrollbar-width: thin;
    margin: 0;
    min-height: 100%;
    text-rendering: optimizeLegibility;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #app {
    font-family: Roboto, sans-serif;
    height: 100%;
    color: ${(props) => props.theme.Text};
  }

  img {
    border-style: none;
  }

  a {
    text-decoration: none;
    background-color: transparent
  }

  button {
    cursor: pointer
  }
`;
