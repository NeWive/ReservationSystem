import React from 'react';
import Table from '../Table';
import ButtonSmall from '../ButtonSmall';
import StatusPanel from '../StatusPanel';
import { reservationLogList } from "../../config/list.config";
import { connect } from 'react-redux';
import './ReservationLog.scss';

const testData = [
    {
        holder: '爱特工作室123213123123',
        place: '讲台周围',
        title: 'h哈哈哈哈哈哈哈哈哈哈哈',
        content: '12332112333asdasdasdads',
        time: '2019年9月1日',
        status: 'pass',
        detailed: '查看',
        upload: '上传',
    },
    {
        holder: '爱特工作室',
        place: '讲台周围',
        title: 'h哈哈哈哈哈哈哈哈哈哈哈',
        content: '12332112333',
        time: '2019年9月1日',
        status: 'pass',
        detailed: '查看',
        upload: '上传',
    },
    {
        holder: '爱特工作室',
        place: '讲台周围',
        title: 'h哈哈哈哈哈哈哈哈哈哈哈',
        content: '12332112333',
        time: '2019年9月1日',
        status: 'pass',
        detailed: '查看',
        upload: '上传',
    },
    {
        holder: '爱特工作室',
        place: '讲台周围',
        title: 'h哈哈哈哈哈哈哈哈哈哈哈',
        content: '12332112333',
        time: '2019年9月1日',
        status: 'pass',
        detailed: '查看',
        upload: '上传',
    },
    {
        holder: '爱特工作室',
        place: '讲台周围',
        title: 'h哈哈哈哈哈哈哈哈哈哈哈',
        content: '12332112333',
        time: '2019年9月1日',
        status: 'pass',
        detailed: '查看',
        upload: '上传',
    },
    {
        holder: '爱特工作室',
        place: '讲台周围',
        title: 'h哈哈哈哈哈哈哈哈哈哈哈',
        content: '12332112333',
        time: '2019年9月1日',
        status: 'pass',
        detailed: '查看',
        upload: '上传',
    },
    {
        holder: '爱特工作室',
        place: '讲台周围',
        title: 'h哈哈哈哈哈哈哈哈哈哈哈',
        content: '12332112333',
        time: '2019年9月1日',
        status: 'pass',
        detailed: '查看',
        upload: '上传',
    },
    {
        holder: '爱特工作室',
        place: '讲台周围',
        title: 'h哈哈哈哈哈哈哈哈哈哈哈',
        content: '12332112333',
        time: '2019年9月1日',
        status: 'pass',
        detailed: '查看',
        upload: '上传',
    },
    {
        holder: '爱特工作室',
        place: '讲台周围',
        title: 'h哈哈哈哈哈哈哈哈哈哈哈',
        content: '12332112333',
        time: '2019年9月1日',
        status: 'pass',
        detailed: '查看',
        upload: '上传',
    },
    {
        holder: '爱特工作室',
        place: '讲台周围',
        title: 'h哈哈哈哈哈哈哈哈哈哈哈',
        content: '12332112333',
        time: '2019年9月1日',
        status: 'pass',
        detailed: '查看',
        upload: '上传',
    },
];

function map(state) {
    return {

    }
}

class ReservationLog extends React.PureComponent {
    constructor(props) {
        super(props);
        this.contentHandler = this.contentHandler.bind(this);
    }
    contentHandler(dItem, hItem) {
        switch (hItem.type) {
            case 'content':
                return dItem[hItem.key];
            case 'button':
                return (
                    <ButtonSmall>
                        { dItem[hItem.key] }
                    </ButtonSmall>
                );
            case 'panel':
                return (
                    <StatusPanel status={'pass'}>
                        { dItem[hItem.key] }
                    </StatusPanel>
                );
            default:
                return '';
        }
    }
    render() {
        return (
            <div id="ReservationLog">
                <div className="reservation_title">
                    预约记录
                </div>
                <div className="reservation_log_table">
                    <Table thList={reservationLogList}
                           tdList={testData}
                            contentHandler={this.contentHandler}/>
                </div>
            </div>
        )
    }
}

export default connect(map)(ReservationLog);