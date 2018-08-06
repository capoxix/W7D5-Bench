import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import {fetchSits} from './actions/sit_actions';


document.addEventListener('DOMContentLoaded', ()=> {
  window.login = login;
  window.logout = logout;
  window.fetchSits = fetchSits;
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

//login through console;
// store.dispatch(login({username:'test',password:'123456'}));
