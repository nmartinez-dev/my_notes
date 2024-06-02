import { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CardBody from '../card-body/CardBody';
import { CardsInterface } from '../../types';

const Cards: FC<CardsInterface> = (props) => {
  const { cards = [], cardsPerRow = 3, height = 200, fetchData } = props;

  const theme = useTheme();

  return (
    <div style={{ margin: '1.5rem' }}>
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
                sx={{
                  height: height,
                  backgroundColor: theme.palette.primary.dark,
                }}
                raised>
                <CardContent style={{ height: '100%' }}>
                  <Typography
                    style={{
                      textAlign: 'center',
                      marginBottom: 10,
                      color: theme.palette.primary.main,
                      fontWeight: 'bold',
                      overflow: 'auto',
                    }}>
                    {card.label}
                  </Typography>
                  <div
                    style={{
                      overflowY: 'auto',
                      maxHeight: Number(height) - 60,
                      height: '100%',
                    }}>
                    {typeof card.content != 'string' ? (
                      card.content
                    ) : (
                      <CardBody card={card} index={index} fetchData={fetchData} />
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cards;
