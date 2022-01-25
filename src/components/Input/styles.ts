import styled from 'styled-components';

type InputProps = {
  isFilled?: boolean;
  isFocused?: boolean;
};

export const InputDiv = styled.div<InputProps>`
  display: flex;
  flex-direction: column
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  padding-top: 15px;
  border: 2px solid white;
  border-radius: 8px;
  background-color: white;
  border-left: ${(props) =>
    props.isFilled ? `5px solid ${props.theme.Blue}` : undefined};
  transition: all 0.2s ease-in-out;

  & > label{
    position: absolute;
    margin: ${(props) =>
      props.isFilled || props.isFocused ? '0 0 0 15px' : '10px 0 0 15px'};
      font-size: ${(props) =>
        props.isFilled || props.isFocused ? '14px' : '20px'};
    transition: all 0.2s ease-in-out;

    &:hover{
      cursor: text;
    }
  }
`;

export const InputComponent = styled.input`
  padding: 15px;
  width: 100%;
  border: none;
  font-size: 20px;
`;
