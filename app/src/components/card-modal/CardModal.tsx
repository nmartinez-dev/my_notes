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
  const [titleError, setTitleError] = useState<boolean>(false);
  const [titleHelperText, setTitleHelperText] = useState<string>('');
  const [description, setDescription] = useState<ReactNode | string>(
    descriptionProp
  );
  const [descriptionError, setDescriptionError] = useState<boolean>(false);
  const [descriptionHelperText, setDescriptionHelperText] =
    useState<string>('');

  const resetForm = () => {
    setTitle('');
    setTitleError(false);
    setTitleHelperText('');
    setDescription('');
    setDescriptionError(false);
    setDescriptionHelperText('');
    setOpenModal(false);
  };

  const validateFields = () => {
    if (title == '') {
      setTitleError(true);
      setTitleHelperText('El título de la nota no puede estar vacío.');
      return false;
    }

    if (title.length > 25) {
      setTitleError(true);
      setTitleHelperText(
        'El título de la nota no puede contener más de 25 caracteres.'
      );
      return false;
    }

    if (description == '') {
      setDescriptionError(true);
      setDescriptionHelperText(
        'La descripción de la nota no puede estar vacía.'
      );
      return false;
    }

    if (typeof description == 'string' && description.length > 255) {
      setDescriptionError(true);
      setDescriptionHelperText(
        'La descripción de la nota no puede contener más de 255 caracteres.'
      );
      return false;
    }

    return true;
  };

  const handleChangeTitle = (event: any) => {
    setTitle(event.target.value);

    if (event.target.value == '') {
      setTitleError(true);
      setTitleHelperText('El título de la nota no puede estar vacío.');
      return;
    }

    if (event.target.value.length > 25) {
      setTitleError(true);
      setTitleHelperText(
        'El título de la nota no puede contener más de 25 caracteres.'
      );
      return;
    }

    setTitleError(false);
    setTitleHelperText('');
  };

  const handleChangeDescription = (event: any) => {
    setDescription(event.target.value);

    if (event.target.value == '') {
      setDescriptionError(true);
      setDescriptionHelperText(
        'La descripción de la nota no puede estar vacía.'
      );
      return;
    }

    if (event.target.value.length > 255) {
      setDescriptionError(true);
      setDescriptionHelperText(
        'La descripción de la nota no puede contener más de 255 caracteres.'
      );
      return;
    }

    setDescriptionError(false);
    setDescriptionHelperText('');
  };

  const handleSubmit = () => {
    let validation = validateFields();
    if (!validation) return;

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
          onChange={handleChangeTitle}
          error={titleError}
          helperText={titleHelperText}
          style={{ flex: 1, margin: 10 }}
          autoComplete='off'
        />
        <TextField
          id='description'
          label='Descripción'
          value={description}
          onChange={handleChangeDescription}
          error={descriptionError}
          helperText={descriptionHelperText}
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
