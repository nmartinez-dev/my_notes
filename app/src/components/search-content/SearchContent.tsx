import { useState, useContext } from 'react';
import { TextField } from '@mui/material';
import { Context } from '../../context/Context';
import { SearchButtonTheme } from '../../themes/Themes';

const SearchContent = () => {
  const { cards, setFilteredCards } = useContext(Context);

  const [text, setText] = useState<string>('');

  const handleChange = (event: any) => {
    setText(event.target.value);

    let availableCards = cards.filter(
      (card, index) =>
        index != cards.length - 1 &&
        (card.label.toLowerCase().includes(event.target.value.toLowerCase()) ||
          (typeof card.content == 'string'
            ? card.content
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
            : true))
    );

    setFilteredCards(availableCards);
  };

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '1.5rem',
        }}>
        <SearchButtonTheme>
          <TextField
            id='search'
            label='Buscar'
            value={text}
            onChange={handleChange}
            autoComplete='off'
          />
        </SearchButtonTheme>
      </div>
    </div>
  );
};

export default SearchContent;
