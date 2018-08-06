import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';



document.addEventListener('DOMContentLoaded', ()=> {
  window.login = login;
  window.logout = logout;
  //change store to configureStore;
  const store = configureStore();
  window.store = store;
  //login through console;
  //store.dispatch(login({username:'test',password:'123456'}));
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
