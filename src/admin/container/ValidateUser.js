import ValidateUser from "../component/ValidateUser";
import { connect } from "react-redux";
import {setPortalId, setPortalStatus, setPortalTarget} from "../action/action";

const mS = (s) => ({
    adminPortalTarget: s.adminPortalTarget,
});

const mD = (d) => ({
    setPortalStatus: (value) => d(setPortalStatus(value)),
    setPortalId: (value) => d(setPortalId(value)),
    setPortalTarget: (value) => d(setPortalTarget(value)),
});

export default connect(mS, mD)(ValidateUser);