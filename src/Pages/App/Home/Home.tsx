import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CardDragon from '../../../components/CardDragon';
import {
  Container,
  Content,
  GridContent,
  InfoNumber,
  SubHeader,
} from './styles';
import { getDragons } from '../../../services/dragons';
import { DragonProps } from '../../../Types/dragons';
import { sortByName } from '../../../utils';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [dragons, setDragons] = useState<DragonProps[]>([]);

  const NewDragon = () => {
    navigate('/new');
  };

  const loadAPI = async () => {
    const response = await getDragons();
    const dragons = sortByName(response.data);
    setDragons(dragons);
  };

  useEffect(() => {
    loadAPI();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <SubHeader>
            <Button onClick={NewDragon}>Inserir novo dragão</Button>
            <InfoNumber>
              <p>{dragons.length}</p>
              <span>Dragões cadastrados</span>
            </InfoNumber>
          </SubHeader>
          <GridContent>
            {dragons.map((dragon, index) => (
              <CardDragon key={index} dragon={dragon} />
            ))}
          </GridContent>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
