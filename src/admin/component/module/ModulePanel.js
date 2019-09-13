import React from "react";
import './ModulePanel.scss';

function RegisteredUserModule(props) {

    return (
        <div id="ModulePanel">
            <div className="input_box module_panel_box">
                <input type="text"
                       placeholder={props.placeholder}/>
            </div>
            <div className="refresh_box module_panel_box">
                {
                    props.buttonList.map((item, index) => (
                        <div className={'module_button'}
                             key={index}
                            onClick={item.module}>
                            {
                                item.name
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RegisteredUserModule;