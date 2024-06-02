import { useEffect, useContext, useState } from 'react';
import Cards from '../../core/cards/Cards';
import CardModal from '../card-modal/CardModal';
import { Context } from '../../context/Context';
import { addCard } from '../../utils/AddCard';

const AvailableCards = () => {
  const { filteredCards, setUpdateCards } = useContext(Context);

  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    let availableCards = filteredCards.map((value) => value);
    availableCards.push(addCard(() => setOpenModal(true)));
    setUpdateCards(availableCards);
  }, []);

  return (
    <>
      <div style={{ margin: '1.5rem' }}>
        <Cards cards={filteredCards} />
      </div>

      {openModal && (
        <CardModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalTitle={'Agregar'}
        />
      )}
    </>
  );
};

export default AvailableCards;
