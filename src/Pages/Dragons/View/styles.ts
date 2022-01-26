import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 160px);
  background: ${(props) => props.theme.Background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

export const Content = styled.div`
  width: 80%;
  margin: 30px 0 50px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

export const InfosDiv = styled.div`
  width: 40%;
  min-width: 350px;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  border-radius: 15px;
  background: ${(props) => props.theme.GradientGrey};

  @media screen and (max-width: 900px) {
    height: 50%;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
    min-width: 200px;
  }
`;

export const DivTexts = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10%;
`;

export const DivImage = styled.div`
  display: grid;
  place-items: center;
  height: 100%;

  & > img {
    width: 70%;

    @media screen and (max-width: 900px) {
      width: 150px;
    }
  }
`;
