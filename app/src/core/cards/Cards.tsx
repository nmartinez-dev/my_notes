import { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { CardsInterface } from '../../types';

const Cards: FC<CardsInterface> = (props) => {
  const { cards = [], cardsPerRow = 3, height = 200 } = props;

  return (
    <>
      {cards.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cardsPerRow}, 1fr)`,
            gap: '1.5rem',
            width: '100%',
          }}>
          {cards.map((card, index) => {
            return (
              <Card key={index} sx={{ height: height }} raised>
                <CardContent style={{ height: '100%' }}>
                  <Typography style={{ textAlign: 'center', marginBottom: 10 }}>
                    {card.label}
                  </Typography>
                  <div
                    style={{
                      overflowY: 'auto',
                      maxHeight: Number(height) - 60,
                      height: '100%',
                    }}>
                    {card.content}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Cards;
