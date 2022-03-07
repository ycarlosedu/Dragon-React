import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router';
import { Container, Content, CreateAccountDiv, Form } from './styles';
import { Button, Input, ModalWrapper } from '../../../components';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Logo from '../../../assets/icons/logo.png';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [retryPassword, setRetryPassword] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalState, setModalState] = useState<string>('');
  const [modalText, setModalText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const auth = getAuth();
  const navigate = useNavigate();
  const { params } = useParams();

  const SetLocalStorage = (user: any) => {
    localStorage.setItem('Dragons/Email', email);
    localStorage.setItem('Dragons/Token', user.uid);
    navigate('/');
  };

  const ThrowError = (error: any) => {
    setModalState('error');
    setModalText(error.message);
    setModalIsOpen(true);
  };

  const handleLogin = (event: FormEvent) => {
    setIsLoading(true);
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        SetLocalStorage(userCredential.user);
      })
      .catch((error) => {
        ThrowError(error);
        setIsLoading(false);
      });
  };

  const handleCreateLogin = (event: FormEvent) => {
    setIsLoading(true);
    event.preventDefault();
    if (password === retryPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          SetLocalStorage(userCredential.user);
        })
        .catch((error) => {
          ThrowError(error);
        });
    } else {
      setModalState('error');
      setModalText('Os dois campos de senha devem estar iguais!');
      setModalIsOpen(true);
    }
    setIsLoading(false);
  };

  return (
    <Container>
      <Content>
        <div>
          <img src={Logo} alt="" />
          <h1>
            {params
              ? 'Cria sua conta e comece a descobrir novos dragões todos os dias!'
              : 'Faça seu login, veja nossos dragões cadastrados e também nos mostre os seus!'}
          </h1>
        </div>
        <Form onSubmit={params ? handleCreateLogin : handleLogin}>
          <Input
            label="E-mail"
            type="email"
            onChange={setEmail}
            value={email}
            required={true}
          />
          <Input
            label="Senha"
            name="password"
            type="password"
            onChange={setPassword}
            value={password}
            required={true}
          />
          {params ? (
            <Input
              label="Confirme sua senha"
              name="password"
              type="password"
              onChange={setRetryPassword}
              value={retryPassword}
              required={true}
            />
          ) : null}
          <CreateAccountDiv>
            {params ? (
              <>
                <p>Já possui uma conta? </p>
                <Link to="/login"> Faça login aqui!</Link>
              </>
            ) : (
              <>
                <p>Ainda não é cadastrado? </p>
                <Link to="/login/create"> Crie uma conta aqui!</Link>
              </>
            )}
          </CreateAccountDiv>
          <Button variant="default" isLoading={isLoading} type="submit">
            {params ? 'Cadastrar' : 'Entrar'}
          </Button>
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
