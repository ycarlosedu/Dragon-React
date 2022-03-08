import styled from 'styled-components';

export const Card = styled.div`
  width: 50%;
  min-width: 250px;
  height: 300px;
  background: ${(props) => props.theme.GradientGrey};
  border: 1px solid ${(props) => props.theme.Borders};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  & > p {
    max-width: 20ch;
    max-height: 10ch;
    overflow: hidden;
    word-break: break-word;
  }
`;

export const DivButton = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
