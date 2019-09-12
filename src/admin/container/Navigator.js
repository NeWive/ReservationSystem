import Navigator from "../component/Navigator";
import { setIsMenuOpen } from "../action/action";
import { connect } from "react-redux";

const mapState = (state) => ({
    isAdminMenuOpen: state.isAdminMenuOpen,
});

const mapDispatch = (dispatch) => ({
    setIsMenuOpen: (value) => dispatch(setIsMenuOpen(value)),
});

export default connect(mapState, mapDispatch)(Navigator);