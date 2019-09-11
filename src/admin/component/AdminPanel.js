import React from "react";
import Navigator from "./Navigator";
import ModuleList from "./ModuleList";
import './AdminPanel.scss';


function AdminPanel() {
    return (
        <div id="Admin">
            <div className="navigator_box">
                <Navigator/>
            </div>
            <div className="module_box">
                <div className="module_list_box">
                    <ModuleList/>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel;