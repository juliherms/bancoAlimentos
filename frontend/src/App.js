import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';
import { store, persistor } from './store';
import GlobalStyle from './styles/global';

/**
 * Classe principal da aplicacao
 */
function App() {
  return (
    //o history armazena o histórico de navegação.
    //o persistor buscar as informacoes salvas no local storage
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes/>
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
