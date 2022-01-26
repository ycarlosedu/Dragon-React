import React, { FormEvent, useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { Container, Content, CreateAccountDiv, Form } from './styles';
import { useNavigate } from 'react-router';
import ModalWrapper from '../../../components/Modal';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/icons/logo.png';

const CreateLogin: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [retryPassword, setRetryPassword] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalState, setModalState] = useState<string>('');
  const [modalText, setModalText] = useState<string>('');
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (password === retryPassword) {
      createUserWithEmailAndPassword(auth, email, password)
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
    } else {
      alert('Os dois campos de senha devem estar iguais!');
    }
  };

  return (
    <Container>
      <Content>
        <div>
          <img src={Logo} alt="" />
          <h1>
            Cria sua conta e comece a descobrir novos dragões todos os dias!
          </h1>
        </div>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Name"
            type="text"
            onChange={setName}
            value={name}
            required={true}
          />
          <Input
            label="Email"
            type="email"
            onChange={setEmail}
            value={email}
            required={true}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            onChange={setPassword}
            value={password}
            required={true}
          />
          <Input
            label="Confirm your password"
            name="password"
            type="password"
            onChange={setRetryPassword}
            value={retryPassword}
            required={true}
          />
          <CreateAccountDiv>
            <p>Já possui uma conta? </p>
            <Link to="/login"> Faça login aqui!</Link>
          </CreateAccountDiv>
          <Button type="submit">Cadastrar</Button>
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

export default CreateLogin;
