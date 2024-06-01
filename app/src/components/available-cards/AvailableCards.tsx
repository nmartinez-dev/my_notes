import { useEffect, useContext } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Cards from '../../core/cards/Cards';
import ButtonIcon from '../../core/button-icon/ButtonIcon';
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
        <ButtonIcon
          id={'add_card_button'}
          icon={<AddCircleOutlineIcon fontSize='large' />}
          tooltip={'Agregar'}
        />
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
