import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signup, login, logout } from '../../actions/session_actions'; 
import Greeting from './greeting';


const mapStateToProps = state => ({
  currentUser: Object.values(state.session)[0]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));
