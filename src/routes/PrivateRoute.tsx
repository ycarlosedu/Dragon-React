import React, { ReactElement } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router';

type PrivateProps = {
  children: ReactElement;
  inverse?: boolean;
};

const PrivateRoute: React.FC<PrivateProps> = ({ children, inverse }) => {
  const { isAuthenticated } = useAuth();
  if (inverse) {
    return isAuthenticated() ? <Navigate to="/" /> : children;
  }
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
