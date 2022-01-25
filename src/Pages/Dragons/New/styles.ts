import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 160px);
  background: ${(props) => props.theme.Background};
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 80%;
  margin: 30px 0 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Form = styled.form`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  justify-content: center;
`;
