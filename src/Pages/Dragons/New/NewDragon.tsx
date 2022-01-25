import React, { FormEvent, useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Container, Content, Form } from './styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {
  getDragonsByID,
  postDragons,
  putDragons,
} from '../../../services/dragons';
import { useNavigate, useParams } from 'react-router';
import ModalWrapper from '../../../components/Modal';

const NewDragon: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [histories, setHistories] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalState, setModalState] = useState<string>('');
  const navigate = useNavigate();
  const { id } = useParams();

  const addNewDragon = async (event: FormEvent) => {
    event.preventDefault();
    const dragon = {
      name: name,
      type: type,
      histories: histories,
    };
    if (id) {
      const response = await putDragons(id, dragon);
      console.log(response);
      verifyResponse(response);
    } else {
      const response = await postDragons(dragon);
      console.log(response);
      verifyResponse(response);
    }
  };

  const verifyResponse = (response: any) => {
    if (response.status > 400) {
      setModalState('error');
      setModalIsOpen(true);
    } else {
      setModalState('success');
      setModalIsOpen(true);
    }
  };

  const GetDragonInfo = async () => {
    const response = await getDragonsByID(id);
    setName(response.data.name);
    setType(response.data.type);
    if (Array.isArray(response.data.histories)) {
      setHistories(response.data.histories[0]);
    } else {
      setHistories(response.data.histories);
    }
  };

  useEffect(() => {
    if (id !== undefined) {
      GetDragonInfo();
    }
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Button
            variant="warning"
            onClick={() => {
              navigate('/');
            }}
          >
            Voltar
          </Button>
          <h1>Cadastre seus dragões aqui e compartilhe-os com o mundo!</h1>
          <Form onSubmit={addNewDragon}>
            <Input
              label="name"
              type="text"
              onChange={setName}
              value={name}
              required={true}
            />
            <Input
              label="type"
              type="text"
              onChange={setType}
              value={type}
              required={true}
            />
            <Input
              label="histories"
              type="text-area"
              onChange={setHistories}
              value={histories}
            />
            <Button type="submit">{id ? 'Salvar' : 'Adicionar dragão'}</Button>
          </Form>
        </Content>
        <ModalWrapper
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          modalState={modalState}
        />
      </Container>
      <Footer />
    </>
  );
};

export default NewDragon;
