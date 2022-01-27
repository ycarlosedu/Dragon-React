import React, { useEffect, useState } from 'react';
import {
  Header,
  Footer,
  CardDragon,
  Button,
  ModalWrapper,
  Loader,
} from '../../../components';
import {
  Container,
  Content,
  EmptyMessage,
  GridContent,
  InfoNumber,
  SubHeader,
} from './styles';
import { getDragons, deleteDragons } from '../../../services/dragons';
import { dragonModalProps, getDragonProps } from '../../../Types/dragons';
import { sortByName } from '../../../utils';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as FeetsImage } from '../../../assets/icons/feets.svg';
import ReactPaginate from 'react-paginate';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [dragons, setDragons] = useState<any>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [modalState, setModalState] = useState<string>('');
  const [dragon, setDragon] = useState<dragonModalProps>();
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

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
    setItemOffset(0);
  };

  useEffect(() => {
    loadAPI();
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + 10;
    setCurrentItems(dragons.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dragons.length / 10));
  }, [itemOffset, dragons]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 10) % dragons.length;
    setItemOffset(newOffset);
  };

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
            {currentItems?.length > 0 ? (
              <>
                <GridContent>
                  {currentItems?.map((dragon, index) => (
                    <CardDragon
                      key={index}
                      dragon={dragon}
                      deleteDragons={DeleteDragonModal}
                    />
                  ))}
                </GridContent>
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="< "
                  renderOnZeroPageCount={undefined}
                />
              </>
            ) : (
              <EmptyMessage>
                <h1>Ops! Parece que não há rastros de dragões por aqui.</h1>
                <h2>Que tal ser o primeiro a cadastrar algum?</h2>
                <FeetsImage />
              </EmptyMessage>
            )}
          </Content>
        ) : (
          <Loader />
        )}
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
