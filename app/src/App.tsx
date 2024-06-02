import { AppTheme } from './themes/Themes';
import { ContextProvider } from './context/Context';
import Header from './components/header/Header';
import SearchContent from './components/search-content/SearchContent';
import AvailableCards from './components/available-cards/AvailableCards';
import Alerts from './core-components/alerts/Alerts';

const App = () => {
  return (
    <AppTheme>
      <ContextProvider>
        <Header />
        <SearchContent />
        <AvailableCards />
        <Alerts />
      </ContextProvider>
    </AppTheme>
  );
};

export default App;
