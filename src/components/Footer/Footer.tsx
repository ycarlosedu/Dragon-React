import React from 'react';

import { Container, Content } from './styles';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <p>Como entrar em contato:</p>
          <a href="https://www.linkedin.com/in/silvacarlosoliveira/">
            <LinkedinIcon />
          </a>
        </div>
        <p>Feito com ❤ por Carlos Silva.</p>
      </Content>
    </Container>
  );
};

export default Footer;
