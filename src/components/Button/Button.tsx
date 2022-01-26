import React, { ButtonHTMLAttributes } from 'react';
import { ButtonWrapper, Tooltip } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  onClick?: any;
  tooltip?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  onClick,
  type,
  tooltip,
}) => {
  return (
    <ButtonWrapper
      variant={variant}
      onClick={onClick}
      type={type ? 'submit' : 'button'}
      tooltip={tooltip}
    >
      {tooltip && <Tooltip>{tooltip}</Tooltip>}
      {children}
    </ButtonWrapper>
  );
};

export default Button;
