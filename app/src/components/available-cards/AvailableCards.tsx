import { useEffect, useContext, useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Cards from '../../core/cards/Cards';
import ButtonIcon from '../../core/button-icon/ButtonIcon';
import CardModal from '../card-modal/CardModal';
import { Context } from '../../context/Context';

const AvailableCards = () => {
  const { cards, setCards } = useContext(Context);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<'Agregar' | 'Editar'>('Agregar');

  const handleAddCard = () => {
    setModalTitle('Agregar');
    setOpenModal(true);
  };

  const addCard = {
    label: '',
    content: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <ButtonIcon
          id={'add_card_button'}
          icon={<AddCircleOutlineIcon fontSize='large' />}
          tooltip={'Agregar'}
          onClick={handleAddCard}
        />
      </div>
    ),
    isEmpty: true,
  };

  useEffect(() => {
    let availableCards = cards.map((value) => value);
    availableCards.push(addCard);
    setCards(availableCards);
  }, []);

  return (
    <>
      <div style={{ margin: '1.5rem' }}>
        <Cards cards={cards} />
      </div>

      {openModal && (
        <CardModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalTitle={modalTitle}
        />
      )}
    </>
  );
};

export default AvailableCards;
