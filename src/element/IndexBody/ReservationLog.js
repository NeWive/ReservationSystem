import React from 'react';
import Table from '../Table';
import { reservationLogList } from "../../config/list.config";
import { connect } from 'react-redux';
import './ReservationLog.scss';

const testData = [
    {
        holder: '爱特工作室',

    }
];

function map(state) {
    return {

    }
}

class ReservationLog extends React.PureComponent {
    render() {
        return (
            <div id="ReservationLog">
                <div className="reservation_title">
                    预约记录
                </div>
                <div className="reservation_log_table">
                    <Table thList={reservationLogList}/>
                </div>
            </div>
        )
    }
}

export default connect(map)(ReservationLog);