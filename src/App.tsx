import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import defaultTheme from './styles/themes/defaultTheme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
