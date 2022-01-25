import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import DragonImage from '../../../assets/dragons/1.png';
import { useNavigate, useParams } from 'react-router';
import Button from '../../../components/Button';
import { getDragonsByID } from '../../../services/dragons';

import { Container, Content, InfosDiv, PhotosDiv } from './styles';

const ViewDragon: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [histories, setHistories] = useState<string>('');
  const navigate = useNavigate();
  const { id } = useParams();

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
        <Button
          variant="warning"
          onClick={() => {
            navigate('/');
          }}
        >
          Voltar
        </Button>
        <Content>
          <PhotosDiv>
            <h2>FOTO</h2>
            <img src={DragonImage} alt="Imagem do dragão" />
          </PhotosDiv>
          <InfosDiv>
            <h2>INFOS</h2>
            <div>
              <h3>Nome: {name}</h3>
              <h3>Tipo: {type}</h3>
              <h3>Descrição: {histories}</h3>
            </div>
          </InfosDiv>
        </Content>
      </Container>

      <Footer />
    </>
  );
};

export default ViewDragon;
