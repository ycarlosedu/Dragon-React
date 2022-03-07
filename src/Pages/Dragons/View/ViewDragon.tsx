import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Container, Content, DivImage, DivTexts, InfosDiv } from './styles';
import { Header, Footer, Button, Loader } from '../../../components';
import { DateFormatter } from '../../../utils';
import { getDragonsByID } from '../../../services/dragons';
import { getDragonProps } from '../../../Types/dragons';

const ViewDragon: React.FC = () => {
  const [dragon, setDragon] = useState<getDragonProps | any>();
  const [dragonImg, setDragonImg] = useState<any>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const GetDragonInfo = async () => {
    const response = await getDragonsByID(id);
    setDragon(response.data);
    setIsLoaded(true);
  };

  useEffect(() => {
    if (id !== undefined) {
      GetDragonInfo();
    }
    ImportImage();
  }, [id]);

  const ImportImage = async () => {
    const indexSelected = Math.floor(Math.random() * 5); // 5 = dragon images
    const image = await import(`../../../assets/dragons/${indexSelected}.png`);
    setDragonImg(image.default);
  };

  return (
    <>
      <Header />
      <Container>
        {isLoaded ? (
          <>
            <Button
              variant="warning"
              onClick={() => {
                navigate('/');
              }}
            >
              Voltar
            </Button>
            <Content>
              <InfosDiv>
                <h2>IMAGEM</h2>
                <DivImage>
                  <img src={dragonImg} alt="Imagem do dragão" />
                </DivImage>
              </InfosDiv>
              <InfosDiv>
                <h2>INFOS</h2>
                {dragon ? (
                  <DivTexts>
                    <h3>Data de criação: </h3>
                    <p>{DateFormatter(dragon?.createdAt)}</p>
                    <h3>Nome: </h3>
                    <p>{dragon?.name}</p>
                    <h3>Tipo: </h3>
                    <p>{dragon?.type}</p>
                    <h3>Descrição: </h3>
                    {Array.isArray(dragon?.histories) ? (
                      <p>{dragon?.histories[0] || 'NA'}</p>
                    ) : (
                      <p>{dragon?.histories || 'NA'}</p>
                    )}
                  </DivTexts>
                ) : null}
              </InfosDiv>
            </Content>
          </>
        ) : (
          <Loader />
        )}
      </Container>
      <Footer />
    </>
  );
};

export default ViewDragon;
