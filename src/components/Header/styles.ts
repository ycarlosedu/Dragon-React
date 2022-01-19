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

export const UserGroupDiv = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  & > img {
    width: 60px;
    padding: 10px 15px;
    border: 1px solid ${(props) => props.theme.Borders};
    border-radius: 10px;
  }
`;

export const LogoGroupDiv = styled.div`
  display: flex;
  align-items: center;

  & img:nth-child(1) {
    width: 70px;
  }

  & img:nth-child(2) {
    width: 130px;
  }
`;
