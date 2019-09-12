import React from "react";
import Navigator from "../container/Navigator";
import ModuleList from "../container/ModuleList";
import ModuleContainer from "./ModuleContainer";
import './AdminPanel.scss';


function AdminPanel() {
    return (
        <div id="Admin">
            <div className="navigator_box">
                <Navigator/>
            </div>
            <div className="module_box">
                <ModuleList/>
                <ModuleContainer/>
            </div>
        </div>
    )
}

export default AdminPanel;