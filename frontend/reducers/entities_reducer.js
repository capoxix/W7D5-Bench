import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import sitsReducer from './sits_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  sits: sitsReducer
});

export default entitiesReducer;
