import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.Background};
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  margin: 30px 0 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const BackAndText = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: 40%;

  & > h1 {
    margin-top: 100px;
  }
`;

export const Form = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  justify-content: center;
`;
