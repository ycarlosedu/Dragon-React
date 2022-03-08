import React from 'react';
import { CardDragonProps } from '../../Types/dragons';
import { Card, DivButton } from './styles';
import Button from '../Button';
import { ReactComponent as Delete } from '../../assets/icons/delete.svg';
import { ReactComponent as ViewIcon } from '../../assets/icons/view.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';
import { useNavigate } from 'react-router-dom';

const CardDragon: React.FC<CardDragonProps> = ({ dragon, deleteDragons }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <h2 data-testid="dragon-name">{dragon.name}</h2>
      <p data-testid="dragon-type">Tipo: {dragon.type}</p>
      <DivButton>
        <Button
          testid="view-dragon"
          tooltip="Visualizar"
          variant="icon"
          onClick={() => navigate(`/view/${dragon.id}`)}
        >
          <ViewIcon color={'#04d361'} />
        </Button>
        <Button
          testid="edit-dragon"
          tooltip="Editar"
          variant="icon"
          onClick={() => navigate(`/edit/${dragon.id}`)}
        >
          <EditIcon color={'#ffcd1e'} />
        </Button>
        <Button
          testid="delete-dragon"
          tooltip="Deletar"
          variant="icon"
          onClick={() => deleteDragons(dragon.id, dragon.name, dragon.type)}
        >
          <Delete color={'#ce4a4a'} />
        </Button>
      </DivButton>
    </Card>
  );
};

export default CardDragon;
