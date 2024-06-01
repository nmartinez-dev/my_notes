import { FC, useContext, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonIcon from '../button-icon/ButtonIcon';
import CardModal from '../../components/card-modal/CardModal';
import ModalConfirm from '../modal-confirm/ModalConfirm';
import { Context } from '../../context/Context';
import { CardBodyInterface } from '../../types';
import './CardBody.css';

const CardBody: FC<CardBodyInterface> = (props) => {
  const { card, index } = props;

  const { cards, setCards } = useContext(Context);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);

  const handleDeleteCard = () => {
    let availableCards = cards.map((value) => value);
    availableCards.splice(index, 1);
    setCards(availableCards);
    setOpenConfirm(false);
  };

  return (
    <>
      <div className='card-content'>
        <div style={{ marginTop: 10, height: '100%' }}>
          {card.content}
        </div>

        <div className='card-icon-buttons-container'>
          <div className='card-icon-button'>
            <ButtonIcon
              id='edit_card_button'
              icon={<EditIcon />}
              tooltip={'Editar'}
              onClick={() => setOpenModal(true)}
            />
          </div>
          <div className='card-icon-button'>
            <ButtonIcon
              id='delete_card_button'
              icon={<DeleteIcon />}
              tooltip={'Eliminar'}
              onClick={() => setOpenConfirm(true)}
            />
          </div>
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
