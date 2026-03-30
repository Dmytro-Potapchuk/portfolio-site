import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import AppRouter from './routes/Router';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppRouter />
      </Router>
    </LanguageProvider>
  );
}

export default App;
