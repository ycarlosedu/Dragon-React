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

export const SubHeader = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
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

export const GridContent = styled.div`
  width: 100%;
  height: 100%;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  place-items: center;
  gap: 30px;
`;
