import React from "react";
import Navigator from "./Navigator";
import './AdminPanel.scss';


function AdminPanel() {
    return (
        <div id="Admin">
            <div className="navigator_box">
                <Navigator/>
            </div>
        </div>
    )
}

export default AdminPanel;