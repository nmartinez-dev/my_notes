import { FC, useState } from 'react';
import { TextField } from '@mui/material';
import ModalForm from '../../core/modal-form/ModalForm';
import { CardModalInterface } from '../../types';

const CardModal: FC<CardModalInterface> = (props) => {
  const { openModal, setOpenModal, modalTitle } = props;

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setOpenModal(false);
  };

  const handleSubmit = () => {};

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
