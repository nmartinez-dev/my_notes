import { FC, useContext, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonIcon from '../button-icon/ButtonIcon';
import CardModal from '../../components/card-modal/CardModal';
import ModalConfirm from '../modal-confirm/ModalConfirm';
import { Context } from '../../context/Context';
import { CardBodyInterface } from '../../types';

const CardBody: FC<CardBodyInterface> = (props) => {
  const { card, index } = props;

  const { cards, setUpdateCards } = useContext(Context);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);

  const handleDeleteCard = () => {
    let availableCards = cards.map((value) => value);
    availableCards.splice(index, 1);
    setUpdateCards(availableCards);
    setOpenConfirm(false);
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
        <div style={{ marginTop: 10, height: '100%', color: '#fff' }}>
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
        />
      )}

      {openConfirm && (
        <ModalConfirm
          open={openConfirm}
          setOpen={setOpenConfirm}
          onConfirm={handleDeleteCard}
        />
      )}
    </>
  );
};

export default CardBody;
