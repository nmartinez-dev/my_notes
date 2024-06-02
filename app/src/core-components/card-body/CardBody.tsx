import { FC, useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonIcon from '../button-icon/ButtonIcon';
import CardModal from '../../components/card-modal/CardModal';
import ModalConfirm from '../modal-confirm/ModalConfirm';
import { Context } from '../../context/Context';
import { messages } from '../../messages/messages';
import { addCard } from '../../utils/AddCard';
import { CardBodyInterface } from '../../types';
import { getCards, deleteCard } from '../../database/firebase';

const CardBody: FC<CardBodyInterface> = (props) => {
  const { card, index } = props;

  const { setUpdateCards, startLoading, stopLoading, setSuccess, setError } =
    useContext(Context);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);

  const theme = useTheme();

  const fetchData = async () => {
    startLoading();

    try {
      const response = await getCards();

      if (response.success) {
        let availableCards = response.data.map((value: object) => value);
        availableCards.push(addCard(() => setOpenModal(true)));
        setUpdateCards(availableCards);
      } else {
        setError(
          typeof response.errorMessage == 'string'
            ? response.errorMessage
            : messages.error.get
        );
      }
    } catch {
      setError(messages.error.default);
    } finally {
      stopLoading();
    }
  };

  const handleDelete = async () => {
    setOpenConfirm(false);
    startLoading();

    try {
      const response = await deleteCard(index);

      if (response.success) {
        setSuccess(messages.success.delete);
        fetchData();
      } else {
        setError(
          typeof response.errorMessage == 'string'
            ? response.errorMessage
            : messages.error.create
        );
      }
    } catch {
      setError(messages.error.default);
    } finally {
      stopLoading();
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-between',
          height: '100%',
        }}>
        <div
          style={{
            marginTop: 10,
            height: '100%',
            color: theme.palette.primary.light,
          }}>
          {card.content}
        </div>

        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <ButtonIcon
            id='edit_card_button'
            icon={<EditIcon color='primary' />}
            tooltip={'Editar'}
            onClick={() => setOpenModal(true)}
          />
          <ButtonIcon
            id='delete_card_button'
            icon={<DeleteIcon color='primary' />}
            tooltip={'Eliminar'}
            onClick={() => setOpenConfirm(true)}
          />
        </div>
      </div>

      {openModal && (
        <CardModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalTitle={'Editar'}
          titleProp={card.label}
          descriptionProp={card.content}
          index={index}
          fetchData={fetchData}
        />
      )}

      {openConfirm && (
        <ModalConfirm
          open={openConfirm}
          setOpen={setOpenConfirm}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
};

export default CardBody;
