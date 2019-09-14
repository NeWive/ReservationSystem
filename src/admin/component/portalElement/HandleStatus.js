import React from "react";
import CloseButtonBlack from "../../element/CloseButtonBlack";
import './HandlerStatus.scss';

function HandleStatus(props) {
    const mapStatus = {
        0: '已冻结',
        1: '已激活',
        2: '未激活',
    };
    const statusList = ['0', '1', '2'];
    return (
        <div id="HandlerStatus">
            <div className="handle_status_head">
                <div className="left">
                    提示
                </div>
                <div className="right">
                    <CloseButtonBlack/>
                </div>
            </div>
            <div className="handle_status_body">
                {
                    console.log(props.adminPortalTarget)
                }
                <select>
                    {
                        statusList.map((item) => (
                            <option value={item} selected={props.adminPortalTarget.status === item ? 'selected' : ''} key={item}>
                                {
                                    mapStatus[item]
                                }
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default HandleStatus;