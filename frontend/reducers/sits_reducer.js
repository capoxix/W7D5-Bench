import {RECEIVE_SITS} from '../actions/sit_actions';

const sitsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SITS:
      return action.sits;
    default:
      return state;
  }
};

export default sitsReducer;
