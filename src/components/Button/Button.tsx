import React from 'react';
import { ButtonWrapper } from './styles';

export type ButtonProps = {
  variant?: string;
  onClick?: any;
  type?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  onClick,
  type,
}) => {
  return (
    <ButtonWrapper
      variant={variant}
      onClick={onClick}
      type={type ? 'submit' : 'button'}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
