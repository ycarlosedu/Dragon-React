import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import { ReactComponent as LogoutIcon } from '../../assets/icons/signOut.svg';

describe('Button', () => {
  test('should render Button icon correctly', () => {
    render(
      <Button variant="icon" tooltip="test-button" testid="button-test">
        <LogoutIcon />
      </Button>,
    );

    const button = screen.getByTestId('button-test');
    const tooltip = document.querySelector('span');
    // @ts-ignore
    expect(button.disabled).toBe(false);
    // @ts-ignore
    expect(tooltip.textContent).toBe('test-button');
  });

  test('should render Button default correctly', () => {
    render(
      <Button variant="default" testid="button-test">
        BUTTONTEST
      </Button>,
    );

    const button = screen.getByTestId('button-test');
    // @ts-ignore
    expect(button.disabled).toBe(false);
    // @ts-ignore
    expect(button.textContent).toBe('BUTTONTEST');
  });
});
