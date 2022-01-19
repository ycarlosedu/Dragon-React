import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.Background};
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  margin: 30px 0 50px;
  height: 100%;
`;
