import { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CardBody from '../card-body/CardBody';
import { CardsInterface } from '../../types';

const Cards: FC<CardsInterface> = (props) => {
  const { cards = [], cardsPerRow = 3, height = 200 } = props;

  const theme = useTheme();

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
              <Card
                key={index}
                sx={{ height: height, backgroundColor: '#000' }}
                raised>
                <CardContent style={{ height: '100%' }}>
                  <Typography
                    style={{
                      textAlign: 'center',
                      marginBottom: 10,
                      color: theme.palette.primary.main,
                      fontWeight: 'bold',
                    }}>
                    {card.label}
                  </Typography>
                  <div
                    style={{
                      overflowY: 'auto',
                      maxHeight: Number(height) - 60,
                      height: '100%',
                    }}>
                    {card.isEmpty ? (
                      card.content
                    ) : (
                      <CardBody card={card} index={index} />
                    )}
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
