import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  test('should render loader correctly', () => {
    render(<Loader />);

    const Loading = screen.getByTestId('bars-svg');
    expect(Loading).toBeInTheDocument();
  });
});
