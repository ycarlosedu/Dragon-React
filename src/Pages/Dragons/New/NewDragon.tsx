import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import * as Yup from 'yup';
import { Container, Content, Form } from './styles';
import {
  Header,
  Footer,
  Input,
  Button,
  ModalWrapper,
} from '../../../components';
import { getValidationErrors } from '../../../utils';
import {
  getDragonsByID,
  postDragons,
  putDragons,
} from '../../../services/dragons';
import { DragonProps } from '../../../Types/dragons';

const NewDragon: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [histories, setHistories] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalState, setModalState] = useState<string>('');
  const [modalText, setModalText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const verifyResponse = (response: any) => {
    if (response.status > 400) {
      setModalState('error');
      setModalIsOpen(true);
      setModalText(response.title);
    } else {
      setModalState('success');
      setModalIsOpen(true);
      if (!id) {
        setName('');
        setType('');
        setHistories('');
      }
    }
  };

  const addNewDragon = async (event: FormEvent) => {
    event.preventDefault();
    setModalText('');
    setIsLoading(true);

    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .max(40, 'No máximo 40 caracteres')
          .matches(
            /^(?!\s*$)[-a-zA-Z0-9_:,.' ']/,
            'Um ou mais caracteres digitados não são permitidos!',
          )
          .required('Este campo é obrigatório!'),
        type: Yup.string()
          .max(40, 'No máximo 40 caracteres')
          .matches(
            /^(?!\s*$)[-a-zA-Z0-9_:,.' ']/,
            'Um ou mais caracteres digitados não são permitidos!',
          )
          .required('Este campo é obrigatório!'),
        histories: Yup.string().max(200, 'No máximo 200 caracteres'),
      });
      const Dragon: DragonProps = {
        name: name,
        type: type,
        histories: histories,
      };
      await schema.validate(Dragon, {
        abortEarly: false,
      });

      if (id) {
        const response = await putDragons(id, Dragon);
        verifyResponse(response);
      } else {
        const response = await postDragons(Dragon);
        verifyResponse(response);
      }

      setIsLoading(false);
    } catch (errors) {
      if (errors instanceof Yup.ValidationError) {
        const errorMessages = getValidationErrors(errors);
        setIsLoading(false);
        setModalState('error');
        setModalIsOpen(true);
        errorMessages.name
          ? setModalText(`Name: ${errorMessages.name}`)
          : setModalText(`Type: ${errorMessages.type}`);
        return;
      }
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
              label="Nome"
              type="text"
              onChange={setName}
              value={name}
              required={true}
            />
            <Input
              label="Tipo"
              type="text"
              onChange={setType}
              value={type}
              required={true}
            />
            <Input
              label="Descrição"
              type="text-area"
              onChange={setHistories}
              value={histories}
            />
            <Button isLoading={isLoading} type="submit">
              {id ? 'Salvar' : 'Adicionar dragão'}
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
      <Footer />
    </>
  );
};

export default NewDragon;
