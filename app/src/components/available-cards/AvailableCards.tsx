import { useEffect, useContext, useState } from 'react';
import Cards from '../../core-components/cards/Cards';
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
      <Cards cards={filteredCards} />

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
