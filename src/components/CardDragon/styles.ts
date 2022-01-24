import styled from 'styled-components';

export const Card = styled.div`
  width: 50%;
  height: 300px;
  background: ${(props) =>
    `linear-gradient(225deg, ${props.theme.Borders} 0%, ${props.theme.Black}) 100%`};
  border: 1px solid ${(props) => props.theme.Borders};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

export const DivButton = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
