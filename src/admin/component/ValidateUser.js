import React, {useState} from "react";
import RegisteredUserModule from "./module/ModulePanel";
import './ValidateUser.scss';
import { validate_user_table } from "../statics/static_content";
import Table from "../element/Table";
import {statusStyle} from "../statics/styleStatic";

function ValidateUser(props) {
    function contentHandler(item, fItem) {
        switch (fItem.type) {
            case 'content':
                {
                    console.log(item[fItem.key]);
                    return item[fItem.key];
                }
            case 'edit':
                return (
                    <div className="edit_button" style={{
                        ...statusStyle[1]
                    }} onClick={() => {
                        openEditPortalHandler(item);
                    }}>
                        编辑
                    </div>
                );
            case 'delete':
                return (
                    <div className="delete_button" style={{
                        ...statusStyle[1]
                    }}>
                        删除
                    </div>
                );
            default:
                return '';
        }
    }
    function openEditPortalHandler(target) {
        document.getElementById('modal-root').style.zIndex = 999;
        props.setPortalTarget(target);
        props.setPortalStatus(true);
        props.setPortalId(1);
    }
    const buttonList = [
        {
            name: '搜索',
            module: () => {},
        },
        {
            name: '添加学生信息',
            module: () => {},
        },
        {
            name: '刷新',
            module: () => {},
        }
    ];
    const data = [
        {
            'student_id': '17020032029',
            'student_name': '赵狗蛋',
        },
        {
            'student_id': '17020032030',
            'student_name': '赵狗蛋',
        },
        {
            'student_id': '17020032031',
            'student_name': '赵狗蛋',
        },
    ];
    const [batchSize, setBatchSize] = useState(10);
    const [currentBatch, setCurrentBatch] = useState(2);
    return (
        <div id="ValidateUser">
            <RegisteredUserModule buttonList={buttonList} placeholder={'请输入学生名'}/>
            <Table thList={validate_user_table}
                   tdList={data}
                   contentHandler={contentHandler}
                   total={data.length}//state 总量
                   batchSize={batchSize}//state 每页的个数
                   currentBatch={currentBatch}// 当前页数 0 开始
                   setBatchSize={setBatchSize}
                   setCurrentBatch={setCurrentBatch}
            />
        </div>
    )
}

export default ValidateUser;