import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ModalWrapper from './Modal';

describe('Modal', () => {
  test('should render modal correctly', () => {
    let modalIsOpen = true;
    const setModalIsOpen = (bool: boolean) => {
      modalIsOpen = bool;
    };

    const { rerender } = render(
      <ModalWrapper
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        modalState="success"
      />,
    );

    const Modal = document.querySelector('div[aria-label="Example Modal"]');
    const TextModal = screen.getByText('Sucesso!');
    expect(Modal).toBeInTheDocument();
    expect(TextModal).toBeInTheDocument();

    const CloseModal = screen.getByText('Fechar');
    fireEvent.click(CloseModal);

    rerender(
      <ModalWrapper
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        modalState="success"
      />,
    );
    expect(Modal).not.toBeInTheDocument();
    expect(TextModal).not.toBeInTheDocument();
  });
});
