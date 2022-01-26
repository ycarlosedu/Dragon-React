import React from 'react';
import { Container, Content, LogoGroupDiv, UserGroupDiv } from './styles';
import UserIcon from '../../assets/icons/user.svg';
import Logo from '../../assets/icons/logo.png';
import LogoName from '../../assets/icons/logoName.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icons/signOut.svg';
import { useAuth } from '../../hooks/useAuth';
import Button from '../Button';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';

const Header: React.FC = () => {
  const { userName } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.removeItem('Dragons/Email');
        localStorage.removeItem('Dragons/Token');
        navigate('/login');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <LogoGroupDiv to="/">
          <img src={Logo} alt="" />
          <img src={LogoName} alt="" />
        </LogoGroupDiv>
        <UserGroupDiv>
          <p>{userName()}</p>
          <img src={UserIcon} alt="" />
          <Button tooltip="Sair" variant="icon" onClick={handleSignOut}>
            <LogoutIcon />
          </Button>
        </UserGroupDiv>
      </Content>
    </Container>
  );
};

export default Header;
