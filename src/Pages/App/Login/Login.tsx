import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Container, Content, CreateAccountDiv, Form } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Container>
      <Content>
        <div>
          <h1>
            Faça seu login, veja nossos dragões cadastrados e também nos mostre
            os seus!
          </h1>
        </div>
        <div>
          <Form action="">
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
        </div>
      </Content>
    </Container>
  );
};

export default Login;
