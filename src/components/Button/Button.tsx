import React, { ButtonHTMLAttributes } from 'react';
import { Bars } from 'react-loader-spinner';
import { ButtonWrapper, Tooltip } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
  onClick?: any;
  tooltip?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  onClick,
  type,
  tooltip,
  isLoading = false,
}) => {
  return (
    <ButtonWrapper
      variant={variant}
      onClick={onClick}
      type={type ? type : 'button'}
      tooltip={tooltip}
    >
      {tooltip && <Tooltip>{tooltip}</Tooltip>}
      {isLoading ? (
        <Bars width="30" height="30" color="white" ariaLabel="loading" />
      ) : (
        children
      )}
    </ButtonWrapper>
  );
};

export default Button;
