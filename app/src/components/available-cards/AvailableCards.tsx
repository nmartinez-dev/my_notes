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

    let availableCards = [addCard(() => setOpenModal(true))];

    try {
      const response = await getCards();

      if (response.success) {
        let storageCards = response.data.map((value: object) => value);
        storageCards.push(availableCards[0]);
        setUpdateCards(storageCards);
      } else {
        setUpdateCards(availableCards);
        setError(
          typeof response.errorMessage == 'string'
            ? response.errorMessage
            : messages.error.get
        );
      }
    } catch {
      setUpdateCards(availableCards);
      setError(messages.error.default);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    setUpdateCards([addCard(() => setOpenModal(true))]);
    fetchData();
  }, []);

  return (
    <>
      {filteredCards.length > 0 ? (
        <Cards cards={filteredCards} fetchData={fetchData} />
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
