import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.Background2};
  border-bottom: 1px solid ${(props) => props.theme.Borders};
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const GroupDiv = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const UserIconDiv = styled.div`
  width: 32px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.Borders};
`;
