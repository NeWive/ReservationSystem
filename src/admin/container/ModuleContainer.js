import ModuleContainer from "../component/ModuleContainer";
import { connect } from "react-redux";
import { setModuleId } from "../action/action";

const mapState = (state) => ({
    adminModuleId: state.adminModuleId,
});

const mapDispatch = (dispatch) => ({
    setAdminModuleId: (value) => dispatch(setModuleId(value))
});

export default connect(mapState, mapDispatch)(ModuleContainer);