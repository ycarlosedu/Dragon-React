import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.Background2};
  border-top: 1px solid ${(props) => props.theme.Borders};
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
