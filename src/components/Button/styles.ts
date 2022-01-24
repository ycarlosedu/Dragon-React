import styled from 'styled-components';
import { ButtonProps } from './Button';

export const ButtonWrapper = styled.button<ButtonProps>`
  width: ${(props) => (props.variant === 'icon' ? '50px' : '250px')};
  height: 50px;
  background: ${(props) =>
    props.variant === 'icon'
      ? props.theme.Background
      : props.variant === 'warning'
      ? `linear-gradient(225deg, ${props.theme.Red}, ${props.theme.Black})`
      : `linear-gradient(225deg, ${props.theme.Blue}, ${props.theme.Black})`};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 20px;
`;
