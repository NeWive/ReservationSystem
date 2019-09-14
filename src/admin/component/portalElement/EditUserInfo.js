import React from "react";
import CloseButtonBlack from "../../element/CloseButtonBlack";
import ButtonGreenSmall from '../../element/ButtonBlueSmall';
import Input from "../../element/Input";
import { user_info_form } from "../../statics/static_content";
import './EditUserInfo.scss';

function EditUserInfo(props) {
    function closePortalHandler() {
        props.setPortalId(-1);
        props.setPortalStatus(false);
        props.setPortalTarget('');
        document.getElementById('modal-root').style.zIndex = -1;
    }
    return (
        <div id="EditUserInfo">
            <div className="handle_status_head">
                <div className="left">
                    提示
                </div>
                <div className="right">
                    <CloseButtonBlack clickHandler={closePortalHandler}/>
                </div>
            </div>
            <div className="handle_status_body">
                {
                    user_info_form.map((item) => (
                        <div className="input_box" key={item.key}>
                            <span>
                                {
                                    `${item.name}: `
                                }
                            </span>
                            <Input placeholder={item.name}
                                    value={`${props.adminPortalTarget[item.key]}`}/>
                        </div>
                    ))
                }
                <div className="submit_box">
                    <ButtonGreenSmall>
                        修改
                    </ButtonGreenSmall>
                </div>
            </div>
        </div>
    )
}

export default EditUserInfo;