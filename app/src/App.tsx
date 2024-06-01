import { ContextProvider } from './context/Context';
import Header from './components/header/Header';
import AvailableCards from './components/available-cards/AvailableCards';

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <AvailableCards />
    </ContextProvider>
  );
};

export default App;
