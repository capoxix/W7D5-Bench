import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';



document.addEventListener('DOMContentLoaded', ()=> {
  window.login = login;
  window.logout = logout;
  //change store to configureStore;
  const store = configureStore();
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
