import React from 'react';
import { Container, Content, LogoGroupDiv, UserGroupDiv } from './styles';
import UserIcon from '../../assets/icons/user.svg';
import Logo from '../../assets/icons/logo.png';
import LogoName from '../../assets/icons/logoName.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <LogoGroupDiv>
          <img src={Logo} alt="" />
          <img src={LogoName} alt="" />
        </LogoGroupDiv>
        <UserGroupDiv>
          <p>Usuario desconhecido</p>
          <img src={UserIcon} alt="" />
        </UserGroupDiv>
      </Content>
    </Container>
  );
};

export default Header;
