import { createGlobalStyle } from 'styled-components';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

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
    background-color: transparent;
    color: ${(props) => props.theme.Primary};

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover, &:focus {
      border: 1px solid white;
      transform: scale(1.05)
    }
  }

  iframe {
  pointer-events: none;
  }


  // MODAL STYLE
  .Modal {
    width: 500px;
    background-color: ${(props) => props.theme.Background2};
    padding: 40px;
    border-radius: 10px;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 600px){
      width: 70%;
    }
  }

  .Overlay {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
