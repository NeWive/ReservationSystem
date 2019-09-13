import React from "react";
import Navigator from "../container/Navigator";
import ModuleList from "../container/ModuleList";
import ModuleContainer from "../container/ModuleContainer";
import './AdminPanel.scss';
import PortalContainer from "../../user/element/Portal/PortalContainer";


function AdminPanel() {
    return (
        <div id="Admin">
            <div className="navigator_box">
                <Navigator/>
            </div>
            <div className="admin_module_box">
                <ModuleList/>
                <ModuleContainer/>
            </div>
        </div>
    )
}

export default AdminPanel;