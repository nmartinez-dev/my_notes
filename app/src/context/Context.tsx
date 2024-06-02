import { createContext, useState, FC } from 'react';
import {
  ContextInterface,
  ProviderInterface,
  CardInterface,
  AlertInterface,
} from '../types';

export const Context = createContext<ContextInterface>({} as ContextInterface);

export const ContextProvider: FC<ProviderInterface> = (props) => {
  const { children } = props;

  const [cards, setCards] = useState<CardInterface[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardInterface[]>([]);
  const [alert, setAlert] = useState<AlertInterface>({
    severity: 'success',
    text: '',
    duration: 3000,
    open: false,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const setUpdateCards = (cards: CardInterface[]) => {
    setCards(cards);
    setFilteredCards(cards);
  };

  const setSuccess = (text: string, duration: number = 3000) => {
    setAlert({
      severity: 'success',
      text: text,
      duration: duration,
      open: true,
    });
  };

  const setError = (text: string, duration: number | null = null) => {
    setAlert({
      severity: 'error',
      text: text,
      duration: duration,
      open: true,
    });
  };

  const startLoading = () => setLoading(true);

  const stopLoading = () => setLoading(false);

  const value = {
    cards,
    setCards,
    filteredCards,
    setFilteredCards,
    alert,
    setAlert,
    loading,
    setLoading,
    setUpdateCards,
    setSuccess,
    setError,
    startLoading,
    stopLoading,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
