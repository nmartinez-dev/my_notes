import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ContextProvider } from './context/Context';
import Header from './components/header/Header';
import AvailableCards from './components/available-cards/AvailableCards';
import Alerts from './core/alerts/Alerts';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#5d13e7',
      },
      secondary: {
        main: '#1d0646',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Header />
        <AvailableCards />
        <Alerts />
      </ContextProvider>
    </ThemeProvider>
  );
};

export default App;
