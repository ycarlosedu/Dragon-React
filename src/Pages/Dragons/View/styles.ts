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
`;

export const PhotosDiv = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 30px 0;
  border-radius: 15px;
  background: ${(props) =>
    `linear-gradient(225deg, ${props.theme.Borders} 0%, ${props.theme.Black}) 100%`};

  & img {
    width: 70%;
  }
`;

export const InfosDiv = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  border-radius: 15px;
  background: ${(props) =>
    `linear-gradient(225deg, ${props.theme.Borders} 0%, ${props.theme.Black}) 100%`};

  & div {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10%;
  }
`;
