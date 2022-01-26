import styled from 'styled-components';

export const InfosModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;

  @media screen and (max-width: 550px) {
    & > h2 {
      font-size: 32px;
    }
  }
`;

export const ButtonsModal = styled.div`
  display: flex;
  width: 90%;
  gap: 20px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 550px) {
    flex-direction: column;

    & > button {
      width: 100%;
    }
  }
`;
