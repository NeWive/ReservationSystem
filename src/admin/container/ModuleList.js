import ModuleList from "../component/ModuleList";
import { connect } from "react-redux";
import { setModuleId } from "../action/action";

const mapState = (state) => ({
    adminModuleId: state.adminModuleId,
    isAdminMenuOpen: state.isAdminMenuOpen,
});

const mapDispatch = (dispatch) => ({
    setAdminModuleId: (value) => dispatch(setModuleId(value))
});

export default connect(mapState, mapDispatch)(ModuleList);