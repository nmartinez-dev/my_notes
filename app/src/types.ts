import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface ContextInterface {
  cards: CardInterface[];
  setCards: Dispatch<SetStateAction<CardInterface[]>>;
  filteredCards: CardInterface[];
  setFilteredCards: Dispatch<SetStateAction<CardInterface[]>>;
  alert: AlertInterface;
  setAlert: Dispatch<SetStateAction<AlertInterface>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setUpdateCards: (cards: CardInterface[]) => void;
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
  fetchData: () => void;
}

export interface AlertInterface {
  severity: 'success' | 'error';
  text: string;
  duration: number | null;
  open: boolean;
}

export interface ButtonIconInterface {
  id: string;
  icon: ReactNode;
  tooltip?: string;
  placement?: any;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ModalFormInterface {
  open: boolean;
  resetForm: () => void;
  headerTitle: string;
  onModalSubmit: () => void;
  children?: ReactNode;
}

export interface ModalConfirmInterface {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onConfirm: () => void;
}

export interface CardModalInterface {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  modalTitle: 'Agregar' | 'Editar';
  titleProp?: string;
  descriptionProp?: ReactNode | string;
  index?: number;
  fetchData: () => void;
}

export interface CardBodyInterface {
  card: CardInterface;
  index: number;
  fetchData: () => void;
}
