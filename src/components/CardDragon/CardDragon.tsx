import React from 'react';
import { CardDragonProps } from '../../Types/dragons';
import { Card, DivButton } from './styles';
import Button from '../Button';
import { ReactComponent as Delete } from '../../assets/icons/delete.svg';
import { ReactComponent as ViewIcon } from '../../assets/icons/view.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';

const CardDragon: React.FC<CardDragonProps> = ({ dragon }) => {
  return (
    <Card>
      <h2>{dragon.name}</h2>
      <p>Tipo: {dragon.type}</p>
      <DivButton>
        <Button variant="icon">
          <ViewIcon color={'#04d361'} />
        </Button>
        <Button variant="icon">
          <EditIcon color={'#ffcd1e'} />
        </Button>
        <Button variant="icon">
          <Delete color={'#ce4a4a'} />
        </Button>
      </DivButton>
    </Card>
  );
};

export default CardDragon;
