import React from "react";
import RegisteredUserModule from "./module/ModulePanel";
import Table from '../element/Table';
import { statusStyle } from "../statics/styleStatic";
import { useState, useEffect } from 'react';
import { registered_user_table } from '../statics/static_content';
import './RegisteredUser.scss';

//0 已冻结 1 已激活 2 已冻结
function RegisteredUser(props) {
    function portalHandler(target) {
        document.getElementById('modal-root').style.zIndex = 999;
        props.setPortalTarget(target);
        props.setPortalStatus(true);
        props.setPortalId(0);
    }
    function contentHandler(item, key) {
        if(key === 'status') {
            return (
                <div className="validated" style={{
                    ...statusStyle[item[key]]
                }} onClick={() => {
                    portalHandler(item);
                }}>
                    {
                        (() => {
                            switch(item[key]) {
                                case '0':
                                    return '已冻结';
                                case '1':
                                    return '已激活';
                                case '2':
                                    return '已冻结';
                                default:
                                    return '';
                            }
                        })()
                    }
                </div>
            )
        }else {
            return item[key];
        }
    }
    const [data, setDate] = useState([]);
    const [batchSize, setBatchSize] = useState(10);
    const [currentBatch, setCurrentBatch] = useState(2);
    useEffect(() => {
        setDate([
            {
                'username': '我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸',
                'email': '12@qq.com',
                'status': '0',
            },
            {
                'username': '123',
                'email': '12@qq.com',
                'status': '1',
            },
            {
                'username': '123',
                'email': '12@qq.com',
                'status': '2',
            },
            {
                'username': '我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸',
                'email': '12@qq.com',
                'status': '0',
            },
            {
                'username': '123',
                'email': '12@qq.com',
                'status': '1',
            },
            {
                'username': '123',
                'email': '12@qq.com',
                'status': '2',
            },{
                'username': '我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸',
                'email': '12@qq.com',
                'status': '0',
            },
            {
                'username': '123',
                'email': '12@qq.com',
                'status': '1',
            },
            {
                'username': '123',
                'email': '12@qq.com',
                'status': '2',
            },
            {
                'username': '123',
                'email': '12@qq.com',
                'status': '1',
            },
            {
                'username': '123',
                'email': '12@qq.com',
                'status': '2',
            },
            {
                'username': '我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸',
                'email': '12@qq.com',
                'status': '0',
            },
            {
                'username': '我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸',
                'email': '12@qq.com',
                'status': '0',
            },
            {
                'username': '123',
                'email': '12@qq.com',
                'status': '1',
            },
            {
                'username': '123',
                'email': '12@qq.com',
                'status': '2',
            },
            {
                'username': '我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸',
                'email': '12@qq.com',
                'status': '0',
            },
            {
                'username': '123',
                'email': '12@qq.com',
                'status': '1',
            },
            {
                'username': '123',
                'email': '12@qq.com',
                'status': '2',
            },{
                'username': '我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸',
                'email': '12@qq.com',
                'status': '0',
            },
            {
                'username': '123',
                'email': '12@qq.com',
                'status': '1',
            },
            {
                'username': '123',
                'email': '12@qq.com',
                'status': '2',
            },
            {
                'username': '123',
                'email': '12@qq.com',
                'status': '1',
            },
            {
                'username': '123',
                'email': '12@qq.com',
                'status': '2',
            },
            {
                'username': '我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸',
                'email': '12@qq.com',
                'status': '0',
            },
        ]);
    }, []);
    function refresh() {
        alert('refresh');
    }
    function search() {
        alert('search');
    }
    const buttonList = [
        {
            name: '搜索',
            module: refresh,
        },
        {
            name: '刷新',
            module: search,
        }
    ];
    return (
        <div id="RegisteredUser">
            <RegisteredUserModule buttonList={buttonList} placeholder={'请输入用户名'}/>
            <Table thList={registered_user_table}
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

export default RegisteredUser;