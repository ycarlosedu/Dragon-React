import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Container, Content, DivImage, DivTexts, InfosDiv } from './styles';
import { Header, Footer, Button, Loader } from '../../../components';
import { DateFormatter } from '../../../utils';
import { getDragonsByID } from '../../../services/dragons';
import DragonImage from '../../../assets/dragons/0.png';
import DragonImage1 from '../../../assets/dragons/1.png';
import DragonImage2 from '../../../assets/dragons/2.png';
import DragonImage3 from '../../../assets/dragons/3.png';
import DragonImage4 from '../../../assets/dragons/4.png';
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
    var img = [
      DragonImage,
      DragonImage1,
      DragonImage2,
      DragonImage3,
      DragonImage4,
    ];
    var indexSelected = Math.floor(Math.random() * img.length);
    setDragonImg(img[indexSelected]);
  }, [id]);

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
                    <p>{dragon?.histories || 'NA'}</p>
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
