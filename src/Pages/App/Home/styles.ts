import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.Background};
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 160px);
`;

export const Content = styled.div`
  width: 90%;
  margin: 30px 0 50px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > ul {
    display: flex;
    justify-content: center;
    width: 50%;
    gap: 30px;
    list-style: none;
    padding-top: 20px;

    & > li {
      border-radius: 15px;
      border-bottom: 1px solid ${(props) => props.theme.Borders};
      padding: 5px 10px;
      cursor: pointer;
    }
  }
`;

export const SubHeader = styled.div`
  margin: 0 auto 15px auto;
  width: 80%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    margin: 50px auto 30px auto;
    gap: 30px;
  }
`;

export const InfoNumber = styled.div`
  & > p {
    font-size: 40px;
    font-weight: bold;
  }

  & > span {
    font-size: 24px;
  }
`;

export const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 80%;

  & > svg {
    width: 300px;
    height: 300px;
  }
`;

export const GridContent = styled.div`
  width: 100%;
  height: 100%;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  place-items: center;
  gap: 30px;

  @media screen and (max-width: 1700px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
