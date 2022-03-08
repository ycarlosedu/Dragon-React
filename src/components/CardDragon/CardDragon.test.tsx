import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CardDragon from './CardDragon';
import { BrowserRouter as Router } from 'react-router-dom';

describe('CardDragon', () => {
  const dragon = {
    name: 'drogo',
    type: 'normal',
    id: 1,
    histories: 'oldschool guy',
    createdAt: new Date(),
  };

  const deleteDragons = () => {
    console.log('deleteDragons');
  };

  test('should render CardDragon correctly', () => {
    render(
      <Router>
        <CardDragon dragon={dragon} deleteDragons={deleteDragons} />
      </Router>,
    );

    const dragonName = screen.getByTestId('dragon-name');
    const dragonType = screen.getByTestId('dragon-type');

    expect(dragonName.textContent).toBe(dragon.name);
    expect(dragonType.textContent).toBe('Tipo: ' + dragon.type);
  });

  test('should view button in CardDragon work correctly', () => {
    render(
      <Router>
        <CardDragon dragon={dragon} deleteDragons={deleteDragons} />
      </Router>,
    );

    const viewDragon = screen.getByTestId('view-dragon');

    fireEvent.click(viewDragon);
    expect(window.location.pathname).toBe(`/view/${dragon.id}`);
  });

  test('should edit button in CardDragon work correctly', () => {
    render(
      <Router>
        <CardDragon dragon={dragon} deleteDragons={deleteDragons} />
      </Router>,
    );

    const editDragon = screen.getByTestId('edit-dragon');

    fireEvent.click(editDragon);
    expect(window.location.pathname).toBe(`/edit/${dragon.id}`);
  });
});
