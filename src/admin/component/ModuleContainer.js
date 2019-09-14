import React from "react";
import RegisteredUser from "../container/RegisteredUser";
import ValidateUser from "../container/ValidateUser";
import ModuleTips from "../container/ModuleTips";
import './ModuleContainer.scss';

function ModuleContainer(props) {
    function switchHandler() {
        switch (props.adminModuleId) {
            case 0:
                return <RegisteredUser/>;//registered_user
            case 1:
                return <ValidateUser/>;//user_validate
            case 2:
                return '';//book_module
            case 3:
                return '';//personal_module
            case 4:
                return '';//admin_list
            case 5:
                return '';//receiver_list
            case 6:
                return '';//lock_list
            case 7:
                return '';//add_list
            default:
                return '';
        }
    }

    return (
        <div id="ModuleContainer">
            <ModuleTips/>
            <div className="module_switch_box">
                {
                    switchHandler()
                }
            </div>
        </div>
    )
}

export default ModuleContainer;