import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';
import store from './store';
import GlobalStyle from './styles/global';

/**
 * Classe principal da aplicacao
 */
function App() {
  return (
    //o history armazena o histórico de navegação.
    <Provider store={store}>
      <Router history={history}>
        <Routes/>
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
