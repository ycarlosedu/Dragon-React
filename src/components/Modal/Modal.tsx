import React from 'react';
import Modal from 'react-modal';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import Button from '../Button';
import { ButtonsModal, CancelModal, InfosModal } from './styles';
import { dragonModalProps } from '../../Types/dragons';

Modal.setAppElement('#root');

type ModalProps = {
  modalIsOpen: boolean;
  setModalIsOpen: Function;
  handleDeleteDragon?: Function;
  dragon?: dragonModalProps;
  modalState?: string;
};

const ModalWrapper: React.FC<ModalProps> = ({
  modalIsOpen,
  setModalIsOpen,
  handleDeleteDragon,
  dragon,
  modalState,
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
      <CancelModal>
        <Button variant="icon" onClick={() => setModalIsOpen(false)}>
          <Close />
        </Button>
      </CancelModal>
      {modalState === 'success' ? (
        <>
          <InfosModal>
            <h2>Sucesso!</h2>
            <h3>A operação foi realizada sem problemas.</h3>
          </InfosModal>
          <Button onClick={() => setModalIsOpen(false)}>Fechar</Button>
        </>
      ) : modalState === 'error' ? (
        <>
          <InfosModal>
            <h2>Erro!</h2>
            <h3>Não foi possível realizar a operação.</h3>
          </InfosModal>
          <Button onClick={() => setModalIsOpen(false)}>Fechar</Button>
        </>
      ) : (
        <>
          <InfosModal>
            <h2>Tem certeza que deseja excluir?</h2>
            <h3>O seguinte dragão será excluído: </h3>
            <p>Nome: {dragon?.name}</p>
            <p>Tipo: {dragon?.type}</p>
          </InfosModal>
          <ButtonsModal>
            <Button onClick={() => setModalIsOpen(false)}>Cancelar</Button>
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
