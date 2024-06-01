import { ContextProvider } from './context/Context';
import Header from './components/header/Header';
import AvailableCards from './components/available-cards/AvailableCards';
import Alerts from './core/alerts/Alerts';

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <AvailableCards />
      <Alerts />
    </ContextProvider>
  );
};

export default App;
