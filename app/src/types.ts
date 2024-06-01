import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface ContextInterface {
  cards: CardInterface[];
  setCards: Dispatch<SetStateAction<CardInterface[]>>;
  alert: AlertInterface;
  setAlert: Dispatch<SetStateAction<AlertInterface>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSuccess: (text: string, duration?: number) => void;
  setError: (text: string, duration?: number | null) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

export interface ProviderInterface {
  children?: ReactNode;
}

export interface CardInterface {
  label: string;
  content: ReactNode | string;
}

export interface CardsInterface {
  cards: CardInterface[];
  cardsPerRow?: number;
  height?: number | string;
}

export interface AlertInterface {
  severity: string;
  text: string;
  duration: number | null;
  open: boolean;
}

export interface ButtonIconInterface {
  id: string;
  icon: ReactNode;
  tooltip?: string;
  placement?: any;
  onClick?: void;
  disabled?: boolean;
}
