import {
  createContext,
  useState,
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
} from 'react';

interface Context {
  cards: CardProps[];
  setCards: Dispatch<SetStateAction<CardProps[]>>;
  alert: Alert;
  setAlert: Dispatch<SetStateAction<Alert>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSuccess: (text: string, duration?: number) => void;
  setError: (text: string, duration?: number | null) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

interface ContextProvider {
  children?: ReactNode;
}

interface CardProps {
  label: string;
  content: ReactNode | string;
}

interface Alert {
  severity: string;
  text: string;
  duration: number | null;
  open: boolean;
}

export const Context = createContext<Context>({} as Context);

export const ContextProvider: FC<ContextProvider> = (props) => {
  const { children } = props;

  const [cards, setCards] = useState<CardProps[]>([]);
  const [alert, setAlert] = useState<Alert>({
    severity: 'success',
    text: '',
    duration: 3000,
    open: false,
  });
  const [loading, setLoading] = useState<boolean>(false);

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
    alert,
    setAlert,
    loading,
    setLoading,
    setSuccess,
    setError,
    startLoading,
    stopLoading,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
