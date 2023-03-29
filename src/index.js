import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store';
import { App } from 'components/App/App';
import { GlobalStyle } from 'components/baseStyles/GlobalStyle';

window.global = { BASE_URL: 'https://petsapi.cyclic.app/api' };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/Pet_Support_Project">
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
//sasasas
