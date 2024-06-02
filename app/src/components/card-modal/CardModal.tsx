import { FC, ReactNode, useContext, useState } from 'react';
import { TextField } from '@mui/material';
import ModalForm from '../../core-components/modal-form/ModalForm';
import { Context } from '../../context/Context';
import { CardModalInterface } from '../../types';

const CardModal: FC<CardModalInterface> = (props) => {
  const {
    openModal,
    setOpenModal,
    modalTitle,
    titleProp = '',
    descriptionProp = '',
    index = 0,
  } = props;

  const { cards, setUpdateCards } = useContext(Context);

  const [title, setTitle] = useState<string>(titleProp);
  const [description, setDescription] = useState<ReactNode | string>(
    descriptionProp
  );

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setOpenModal(false);
  };

  const handleSubmit = () => {
    let availableCards = cards.map((value) => value);
    let cardToAdd = {
      label: title,
      content: description,
      isEmpty: false,
    };

    if (modalTitle == 'Agregar') {
      availableCards.unshift(cardToAdd);
    } else {
      availableCards[index] = cardToAdd;
    }

    setUpdateCards(availableCards);
    resetForm();
  };

  return (
    <ModalForm
      open={openModal}
      resetForm={resetForm}
      headerTitle={modalTitle}
      onModalSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          id='title'
          label='Título'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ flex: 1, margin: 10 }}
          autoComplete='off'
        />
        <TextField
          id='description'
          label='Descripción'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ flex: 1, margin: 10 }}
          autoComplete='off'
          multiline
          rows={5}
        />
      </div>
    </ModalForm>
  );
};

export default CardModal;
