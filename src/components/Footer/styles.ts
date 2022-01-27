import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.Background2};
  border-top: 1px solid ${(props) => props.theme.Borders};
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    & > a > svg {
      width: 50px;
      height: 50px;
      cursor: pointer;

      @media screen and (max-width: 600px) {
        width: 30px;
        height: 30px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;
