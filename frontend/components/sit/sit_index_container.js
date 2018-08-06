import SitIndex from './sit_index.jsx';
import {connect} from 'react-redux';
import {fetchSits} from '../../actions/sit_actions';

const mapStateToProps = (state) => ({
  sits: Object.values(state.entities.sits)
});

const mapDispatchToProps = (dispatch) => ({
  fetchSits: () => dispatch(fetchSits())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SitIndex);
