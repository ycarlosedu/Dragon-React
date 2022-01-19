import React from 'react';
import { Container, Content, GroupDiv, UserIconDiv } from './styles';
import UserIcon from '../../assets/icons/user.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <GroupDiv>
          <p>teste</p>
          <p>teste</p>
        </GroupDiv>
        <GroupDiv>
          <p>Usuario desconhecido</p>
          <UserIconDiv>
            <img src={UserIcon} alt="" />
          </UserIconDiv>
        </GroupDiv>
      </Content>
    </Container>
  );
};

export default Header;
