import { useEffect, useContext } from 'react';
import Cards from '../../core/cards/Cards';
import AddButton from '../add-button/AddButton';
import { Context } from '../../context/Context';

const AvailableCards = () => {
  const { cards, setCards } = useContext(Context);

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
        <AddButton />
      </div>
    ),
  };

  useEffect(() => {
    let availableCards = cards.map((value) => value);
    availableCards.push(addCard);
    setCards(availableCards);
  }, []);

  return (
    <div style={{ margin: '1.5rem' }}>
      <Cards cards={cards} />
    </div>
  );
};

export default AvailableCards;
