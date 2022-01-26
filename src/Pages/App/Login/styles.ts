import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 30px;

    & > div {
      width: 80%;
    }
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  @media screen and (max-width: 450px) {
    & > div > h1 {
      display: none;
    }
  }
`;

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 80%;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const CreateAccountDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;
