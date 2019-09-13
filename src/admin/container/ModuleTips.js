import ModuleTips from "../component/ModuleTips";
import { setModuleId } from "../action/action";
import { connect } from "react-redux";

const mapStatus = (s) => ({
    adminModuleId: s.adminModuleId,
});

const mapDispatch = (d) => ({
    setAdminModuleId: (value) => d(setModuleId(value)),
});

export default connect(mapStatus, mapDispatch)(ModuleTips);