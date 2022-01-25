import React, { FormEvent, useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Container, Content, Form } from './styles';

const CreateLogin: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [retryPassword, setRetryPassword] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (password === retryPassword) {
      alert('Sucess');
      localStorage.setItem('Name', name);
      localStorage.setItem('Email', email);
      localStorage.setItem('Password', password);
    } else {
      alert('Os dois campos de senha devem estar iguais!');
    }
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(retryPassword);
  };

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
              type="password"
              onChange={setPassword}
              value={password}
              required={true}
            />
            <Input
              label="Confirm your password"
              type="password"
              onChange={setRetryPassword}
              value={retryPassword}
              required={true}
            />
            <Button type="submit">Cadastrar</Button>
          </Form>
        </div>
      </Content>
    </Container>
  );
};

export default CreateLogin;
