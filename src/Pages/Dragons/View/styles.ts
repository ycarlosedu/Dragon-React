import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 160px);
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

  @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    height: 90%;
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
  gap: 10px;

  @media screen and (max-width: 950px) {
    justify-content: flex-start;
    padding: 0;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
    min-width: 200px;
  }
`;

export const DivTexts = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-bottom: 10%;

  & > h3 {
    margin-bottom: 5px;
  }

  & > p {
    border-radius: 15px;
    background: ${(props) => props.theme.GradientGrey};
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
  }

  & p:nth-last-child(1) {
    margin-bottom: 0;
  }
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  & > img {
    border-radius: 15px;
    background: ${(props) => props.theme.GradientGrey};
    width: 400px;
    height: 300px;

    @media screen and (max-width: 950px) {
      width: 300px;
    }

    @media screen and (max-width: 350px) {
      width: 200px;
      height: 200px;
    }
  }
`;
