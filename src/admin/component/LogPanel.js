import React from "react";
import Input from "../element/Input";
import ButtonBlue from "../element/ButtonBlue";
import { root_log_in } from "../statics/static_content";
import './LogPanel.scss';

export default function LogPanel(props) {
    return (
        <div id="LogPanel">
            <div className="log_panel_container">
                <div className="header">
                    <span>
                        众创空间预约系统管理登录
                    </span>
                </div>
                <div className="log_in_form">
                    {
                        root_log_in.map((item) => (
                            <div className="input_sel" key={item.key}>
                                <Input type={item.type}
                                        placeholder={item.name}
                                        key={item.key}/>
                            </div>
                        ))
                    }
                    <ButtonBlue clickHandler={() => {
                        props.setLogIn(true);
                    }}>
                        登录
                    </ButtonBlue>
                </div>
            </div>
        </div>
    );
}