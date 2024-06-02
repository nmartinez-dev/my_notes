import { useEffect, useContext, useState } from 'react';
import Cards from '../../core-components/cards/Cards';
import CardModal from '../card-modal/CardModal';
import { Context } from '../../context/Context';
import { addCard } from '../../utils/AddCard';
import { messages } from '../../messages/messages';
import { getCards } from '../../database/firebase';

const AvailableCards = () => {
  const { filteredCards, setUpdateCards, startLoading, stopLoading, setError } =
    useContext(Context);

  const [openModal, setOpenModal] = useState<boolean>(false);

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {filteredCards.length > 0 ? (
        <Cards cards={filteredCards} />
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '10rem',
          }}>
          No se encontraron coincidencias.
        </div>
      )}

      {openModal && (
        <CardModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalTitle={'Agregar'}
          fetchData={fetchData}
        />
      )}
    </>
  );
};

export default AvailableCards;
