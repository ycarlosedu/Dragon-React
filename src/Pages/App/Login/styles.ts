import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.Background};
  display: grid;
  place-items: center;
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    width: 40%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const CreateAccountDiv = styled.div`
  display: flex;
  gap: 10px;
`;
