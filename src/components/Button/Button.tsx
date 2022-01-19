import React from 'react';
import { ButtonWrapper } from './styles';

export type ButtonProps = {
  variant?: string;
  onClick?: any;
};

const Button: React.FC<ButtonProps> = ({ children, variant, onClick }) => {
  return (
    <ButtonWrapper variant={variant} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
