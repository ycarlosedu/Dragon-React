import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Container, Content } from './styles';

const NewDragon: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>teste</Content>
      </Container>
      <Footer />
    </>
  );
};

export default NewDragon;
