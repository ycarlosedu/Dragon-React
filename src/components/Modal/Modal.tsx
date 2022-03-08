import React from 'react';
import Modal from 'react-modal';
import Button from '../Button';
import { ButtonsModal, InfosModal } from './styles';
import { dragonModalProps } from '../../Types/dragons';

Modal.setAppElement('body');

type ModalProps = {
  modalIsOpen: boolean;
  setModalIsOpen: Function;
  handleDeleteDragon?: Function;
  dragon?: dragonModalProps;
  modalState?: string;
  text?: string;
};

const ModalWrapper: React.FC<ModalProps> = ({
  modalIsOpen,
  setModalIsOpen,
  handleDeleteDragon,
  dragon,
  modalState,
  text = '',
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => setModalIsOpen(false)}
      className="Modal"
      overlayClassName="Overlay"
      contentLabel="Example Modal"
    >
      {modalState === 'success' ? (
        <>
          <InfosModal>
            <h2>Sucesso!</h2>
            <h3>A operação foi realizada sem problemas.</h3>
          </InfosModal>

          <ButtonsModal>
            <Button variant="default" onClick={() => setModalIsOpen(false)}>
              Fechar
            </Button>
          </ButtonsModal>
        </>
      ) : modalState === 'error' ? (
        <>
          <InfosModal>
            <h2>Erro!</h2>
            <h3>
              {text !== '' ? text : 'Não foi possível realizar a operação.'}
            </h3>
          </InfosModal>

          <ButtonsModal>
            <Button variant="default" onClick={() => setModalIsOpen(false)}>
              Fechar
            </Button>
          </ButtonsModal>
        </>
      ) : (
        <>
          <InfosModal>
            <h2>Atenção!</h2>
            <h3>Tem certeza que deseja excluir? </h3>
            <p>Nome: {dragon?.name}</p>
            <p>Tipo: {dragon?.type}</p>
          </InfosModal>

          <ButtonsModal>
            <Button variant="default" onClick={() => setModalIsOpen(false)}>
              Cancelar
            </Button>
            <Button variant="warning" onClick={handleDeleteDragon}>
              Confirmar
            </Button>
          </ButtonsModal>
        </>
      )}
    </Modal>
  );
};

export default ModalWrapper;
