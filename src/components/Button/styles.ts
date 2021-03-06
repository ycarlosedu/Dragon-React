import styled from 'styled-components';
import defaultTheme from '../../styles/themes/defaultTheme';
import { ButtonProps } from './Button';

export const Tooltip = styled.span`
  display: block;
  visibility: hidden;
  background-color: ${(props) => props.theme.Background};
  color: ${(props) => props.theme.Text};
  border: 1px solid ${(props) => props.theme.Borders};
  text-align: center;
  border-radius: 8px;
  padding: 0.4rem 1rem;
  transform: translateY(20px);
  transition: 0.3s ease-in-out;
  opacity: 0;
  position: absolute;
  z-index: 1;
  font-size: 14px;
  top: 65px;

  &:after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 45%;
    margin-top: 5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent ${(props) => props.theme.Borders}
      transparent;
  }
`;

const buttonBG: { [key: string]: string } = {
  icon: defaultTheme.Background,
  warning: defaultTheme.GradientRed,
  default: defaultTheme.GradientBlue,
};

const buttonSize: { [key: string]: string } = {
  icon: '50px',
  warning: '250px',
  default: '250px',
};

export const ButtonWrapper = styled.button<ButtonProps>`
  width: ${(props) => buttonSize[props.variant]};
  height: 50px;
  background: ${(props) => buttonBG[props.variant]};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 20px;
  display: grid;
  place-items: center;

  @media (min-width: 768px) {
    &:hover ${Tooltip} {
      transform: translateX(0px);
      visibility: visible;
      opacity: 1;
    }
  }
`;
