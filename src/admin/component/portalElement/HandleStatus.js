import React from "react";
import CloseButtonBlack from "../../element/CloseButtonBlack";
import ButtonGreenSmall from '../../element/ButtonBlueSmall';
import './HandlerStatus.scss';

function HandleStatus(props) {
    function closePortalHandler() {
        props.setPortalId(-1);
        props.setPortalStatus(false);
        props.setPortalTarget('');
        document.getElementById('modal-root').style.zIndex = -1;
    }
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
                    <CloseButtonBlack clickHandler={closePortalHandler}/>
                </div>
            </div>
            <div className="handle_status_body">
                <div className="username">
                    {
                        `用户名: ${props.adminPortalTarget.username}`
                    }
                </div>
                <div className="email">
                    {
                        `邮箱: ${props.adminPortalTarget.email}`
                    }
                </div>
                <div className="set_status">
                    <div className={'others'}>
                        设置状态：
                    </div>
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
                <div className="handle_button">
                    <div className="left">
                        <ButtonGreenSmall>
                            确定
                        </ButtonGreenSmall>
                    </div>
                    <div className="right">
                        <ButtonGreenSmall  clickHandler={closePortalHandler}>
                            取消
                        </ButtonGreenSmall>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HandleStatus;