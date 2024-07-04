import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import store from '../store/reducer'
import { Provider } from 'react-redux';

hydrateRoot(document.getElementById('root'),
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
    
      <App />
      
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>);