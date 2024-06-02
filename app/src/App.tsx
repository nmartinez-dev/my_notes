import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ContextProvider } from './context/Context';
import Header from './components/header/Header';
import SearchContent from './components/search-content/SearchContent';
import AvailableCards from './components/available-cards/AvailableCards';
import Alerts from './core/alerts/Alerts';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#00bdab',
        dark: '#000000',
        light: '#ffffff',
      },
      secondary: {
        main: '#ff42ff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Header />
        <SearchContent />
        <AvailableCards />
        <Alerts />
      </ContextProvider>
    </ThemeProvider>
  );
};

export default App;
