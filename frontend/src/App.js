import React from 'react';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

/**
 * Classe principal da aplicacao
 */
function App() {
  return (
    //o history armazena o histórico de navegação.
    <Router history={history}>
      <Routes/>
    </Router>
  );
}

export default App;
