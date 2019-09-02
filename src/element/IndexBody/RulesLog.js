import React from 'react';
import Table from "../Table";
import { regulationLogForm } from "../../config/list.config";
import './RulesLog.scss';

const testData = [
    {
        regulation_time: '2019年9月1日',
        regulation_reason: '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤' +
            '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤',
    },
    {
        regulation_time: '2019年9月1日',
        regulation_reason: '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤' +
            '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤',
    },{
        regulation_time: '2019年9月1日',
        regulation_reason: '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤' +
            '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤',
    },{
        regulation_time: '2019年9月1日',
        regulation_reason: '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤' +
            '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤',
    },{
        regulation_time: '2019年9月1日',
        regulation_reason: '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤' +
            '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤',
    },{
        regulation_time: '2019年9月1日',
        regulation_reason: '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤' +
            '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤',
    },{
        regulation_time: '2019年9月1日',
        regulation_reason: '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤' +
            '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤',
    },{
        regulation_time: '2019年9月1日',
        regulation_reason: '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤' +
            '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤',
    },{
        regulation_time: '2019年9月1日',
        regulation_reason: '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤' +
            '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤',
    },{
        regulation_time: '2019年9月1日',
        regulation_reason: '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤' +
            '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤',
    },{
        regulation_time: '2019年9月1日',
        regulation_reason: '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤' +
            '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤',
    },
];

class RulesLog extends React.PureComponent {
    constructor(props) {
        super(props);
        this.contentHandler = this.contentHandler.bind(this);
    }
    contentHandler(dItem, hItem) {
        return dItem[hItem.key];
    }
    render() {
        return (
            <div id="RulesLog">
                <div className="reservation_title">
                    违章记录
                </div>
                <div className="reservation_log_table">
                    <Table thList={ regulationLogForm }
                           tdList={ testData }
                           contentHandler={this.contentHandler}/>
                </div>
            </div>
        )
    }
}

export default RulesLog;