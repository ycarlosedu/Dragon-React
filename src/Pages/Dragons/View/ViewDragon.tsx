import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import DragonImage from '../../../assets/dragons/0.png';
import DragonImage1 from '../../../assets/dragons/1.png';
import DragonImage2 from '../../../assets/dragons/2.png';
import DragonImage3 from '../../../assets/dragons/3.png';
import DragonImage4 from '../../../assets/dragons/4.png';
import { useNavigate, useParams } from 'react-router';
import Button from '../../../components/Button';
import { getDragonsByID } from '../../../services/dragons';

import { Container, Content, DivImage, DivTexts, InfosDiv } from './styles';
import { DateFormatter } from '../../../utils';
import Loader from '../../../components/Loader';

interface DragonProps {
  name: string;
  type: string;
  histories: string;
  createdAt: Date;
}

const ViewDragon: React.FC = () => {
  const [dragon, setDragon] = useState<DragonProps | any>();
  const [dragonImg, setDragonImg] = useState<any>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const GetDragonInfo = async () => {
    const response = await getDragonsByID(id);
    setDragon(response.data);
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
    setIsLoaded(true);
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
                <h2>FOTO</h2>
                <DivImage>
                  <img src={dragonImg} alt="Imagem do dragão" />
                </DivImage>
              </InfosDiv>
              <InfosDiv>
                <h2>INFOS</h2>
                {dragon ? (
                  <DivTexts>
                    <h3>Data de criação: {DateFormatter(dragon?.createdAt)}</h3>
                    <h3>Nome: {dragon?.name}</h3>
                    <h3>Tipo: {dragon?.type}</h3>
                    <h3>Descrição: {dragon?.histories}</h3>
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
