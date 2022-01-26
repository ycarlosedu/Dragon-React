import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CardDragon from '../../../components/CardDragon';
import {
  Container,
  Content,
  EmptyMessage,
  GridContent,
  InfoNumber,
  SubHeader,
} from './styles';
import { getDragons } from '../../../services/dragons';
import { dragonModalProps, getDragonProps } from '../../../Types/dragons';
import { sortByName } from '../../../utils';
import Button from '../../../components/Button';
import ModalWrapper from '../../../components/Modal';
import { useNavigate } from 'react-router-dom';
import { deleteDragons } from '../../../services/dragons';
import { ReactComponent as FeetsImage } from '../../../assets/icons/feets.svg';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [dragons, setDragons] = useState<getDragonProps[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [modalState, setModalState] = useState<string>('');
  const [dragon, setDragon] = useState<dragonModalProps>();

  const DeleteDragonModal = (id: number, name: string, type: string) => {
    setModalState('');
    setModalIsOpen(true);
    setDragon({ id: id, name: name, type: type });
  };

  const handleDeleteDragon = async () => {
    setModalIsOpen(false);
    const response = await deleteDragons(dragon?.id);
    verifyResponse(response);
  };

  const verifyResponse = (response: any) => {
    if (response.status > 400) {
      setModalState('error');
      setModalIsOpen(true);
    } else {
      setModalState('success');
      setModalIsOpen(true);
      loadAPI();
    }
  };

  const loadAPI = async () => {
    setIsLoaded(false);
    const response = await getDragons();
    if (response.status > 400) {
      setModalState('error');
      setModalIsOpen(true);
    } else {
      const dragons = sortByName(response.data);
      setDragons(dragons);
    }
    setIsLoaded(true);
  };

  useEffect(() => {
    loadAPI();
  }, []);

  return (
    <>
      <Header />
      <Container>
        {isLoaded ? (
          <Content>
            <SubHeader>
              <Button onClick={() => navigate('/new')}>
                Inserir novo dragão
              </Button>
              <InfoNumber>
                <p>{dragons.length}</p>
                <span>Dragões cadastrados</span>
              </InfoNumber>
            </SubHeader>
            {dragons.length > 0 ? (
              <GridContent>
                {dragons.map((dragon, index) => (
                  <CardDragon
                    key={index}
                    dragon={dragon}
                    deleteDragons={DeleteDragonModal}
                  />
                ))}
              </GridContent>
            ) : (
              <EmptyMessage>
                <h1>Ops! Parece que não há rastros de dragões por aqui.</h1>
                <h2>Que tal ser o primeiro a cadastrar algum?</h2>
                <FeetsImage />
              </EmptyMessage>
            )}
          </Content>
        ) : null}
        <ModalWrapper
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          handleDeleteDragon={handleDeleteDragon}
          dragon={dragon}
          modalState={modalState}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
