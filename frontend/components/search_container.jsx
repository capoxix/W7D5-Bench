import {connect} from 'react-redux';
import {fetchSits} from '../actions/sit_actions';
import Search from './search.jsx';

const mapStateToProps = (state) => ({
  sits: state.entities.sits
});

const mapDispatchToProps = (dispatch) => ({
  fetchSits: () => dispatch(fetchSits())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
