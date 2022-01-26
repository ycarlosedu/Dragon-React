import styled from 'styled-components';
import { ButtonProps } from './Button';

export const ButtonWrapper = styled.button<ButtonProps>`
  width: ${(props) => (props.variant === 'icon' ? '50px' : '250px')};
  height: 50px;
  background: ${(props) =>
    props.variant === 'icon'
      ? props.theme.Background
      : props.variant === 'warning'
      ? props.theme.GradientRed
      : props.theme.GradientBlue};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 20px;
  display: grid;
  place-items: center;
`;
