import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import defaultTheme from './styles/themes/defaultTheme';
import firebaseConfig from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import AuthProvider from './hooks/useAuth';

initializeApp(firebaseConfig);
const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <GlobalStyles />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
