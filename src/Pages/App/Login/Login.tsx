import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import Logo from '../../../assets/icons/logo.png';

import { Container, Content, CreateAccountDiv, Form } from './styles';
import ModalWrapper from '../../../components/Modal';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalState, setModalState] = useState<string>('');
  const [modalText, setModalText] = useState<string>('');
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('Dragons/Email', email);
        localStorage.setItem('Dragons/Token', user.uid);
        navigate('/');
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setModalState('error');
        setModalText(errorMessage);
        setModalIsOpen(true);
      });
  };

  return (
    <Container>
      <Content>
        <div>
          <img src={Logo} alt="" />
          <h1>
            Faça seu login, veja nossos dragões cadastrados e também nos mostre
            os seus!
          </h1>
        </div>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            onChange={setEmail}
            value={email}
            required={true}
          />
          <Input
            label="Password"
            type="password"
            onChange={setPassword}
            value={password}
            required={true}
          />
          <CreateAccountDiv>
            <p>Ainda não é cadastrado? </p>
            <Link to="/create-login"> Crie uma conta aqui!</Link>
          </CreateAccountDiv>
          <Button type="submit">Entrar</Button>
        </Form>
      </Content>
      <ModalWrapper
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        modalState={modalState}
        text={modalText}
      />
    </Container>
  );
};

export default Login;
