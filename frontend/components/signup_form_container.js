import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup} from '../actions/session_actions';

const msp = (state, ownProps) => ({
  errors: state.errors,
  formType: 'signup'
});

const mdp = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);
