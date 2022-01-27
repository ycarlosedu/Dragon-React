import React, { createContext, useContext } from 'react';

interface AuthContextState {
  userName: () => string;
  isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const userName = () => {
    const username = localStorage.getItem('Dragons/Email');
    const token = localStorage.getItem('Dragons/Token');

    if (token && username) {
      return username;
    }

    return 'Usuário desconhecido';
  };

  const isAuthenticated = () => {
    const username = localStorage.getItem('Dragons/Email');
    const token = localStorage.getItem('Dragons/Token');

    if (username !== null && token !== null) {
      return true;
    }

    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        userName,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const authData = useContext(AuthContext);

  if (!authData) {
    throw new Error('Cannot use useAuth outside a AuthProvider');
  }

  return authData;
}

export default AuthProvider;
