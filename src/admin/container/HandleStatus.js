import HandleStatus from "../component/portalElement/HandleStatus";
import { connect } from "react-redux";
import {setPortalId, setPortalStatus} from "../action/action";
import { setPortalTarget } from "../action/action";

function mapStatus(s) {
    return {
        adminPortalTarget: s.adminPortalTarget,
    }
}

function mapDispatch(d) {
    return {
        setPortalStatus: (value) => d(setPortalStatus(value)),
        setPortalId: (value) => d(setPortalId(value)),
        setPortalTarget: (value) => d(setPortalTarget(value)),
    }
}

export default connect(mapStatus, mapDispatch)(HandleStatus);