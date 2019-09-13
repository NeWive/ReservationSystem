import App from '../App';
import { connect } from "react-redux";

const mapState = (state) => ({
    isLogIn: state.isAdminLogIn,
    isPortalOn: state.isPortalOn,
    portalId: state.portalId,
});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(App);