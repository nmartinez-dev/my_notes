import { AppTheme } from './themes/Themes';
import { ContextProvider } from './context/Context';
import Header from './components/header/Header';
import SearchContent from './components/search-content/SearchContent';
import AvailableCards from './components/available-cards/AvailableCards';
import Alerts from './core-components/alerts/Alerts';
import Loader from './core-components/loader/Loader';

const App = () => {
  return (
    <AppTheme>
      <ContextProvider>
        <Header />
        <SearchContent />
        <AvailableCards />
        <Alerts />
        <Loader />
      </ContextProvider>
    </AppTheme>
  );
};

export default App;
