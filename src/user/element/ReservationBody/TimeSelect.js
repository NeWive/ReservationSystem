import React from 'react';
import Button from '../Button';
import { setPropsHandler } from "../../functions/propsHandler";
import { mapDate, getDateList, switchDayHandler, statusHandler } from "../../functions/dateHandler";
import { connect } from 'react-redux';
import './TimeSelect.scss';

const second = 1000;

function map(state) {
    return {
        selectedTime: state.selectedTime,
    }
}

class TimeSelect extends React.PureComponent {
    constructor(props) {
        super(props);
        this.currentDate = new Date();
        let temp = Date.parse(this.currentDate);
        this.endTime = new Date(temp + second * 60 * 60 * 24 * 6);
        this.timeList = getDateList(this.currentDate);
        this.submitHandler = this.submitHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }
    async clickHandler(e, index, cIndex) {
        e.stopPropagation();
        let target = this.timeList[index].timeList[cIndex];
        if(target.status !== 2) {
            setPropsHandler(this, 'SET_SELECTED_TIME', Date.parse(target.time)/1000);
        }
    }
    submitHandler() {
        if(this.props.selectedTime > 0) {
            setPropsHandler(this, 'SET_RESERVATION_INDEX', 1);
        }else {
            alert('请先选择一个时间');
        }
    }
    render() {
        return (
            <div id="TimeSelect">
                <div className="title">
                    <div className="title_left">
                        现可预约的时间：
                    </div>
                    <div className="time_range">
                        {
                            `${this.currentDate.getMonth() + 1}月${this.currentDate.getDate()}日-${this.endTime.getMonth() + 1}月${this.endTime.getDate()}日`
                        }
                    </div>
                </div>
                <div className="body">
                    {
                        this.timeList.map((item, index) => (
                            <div className="day"
                                 key={item.date}>
                                    <div className="day_date">
                                        {
                                            `${item.date.getMonth() + 1}月${item.date.getDate()}日 周${mapDate[item.date.getDay()]}`
                                        }
                                    </div>
                                    {
                                        item.timeList.map((cItem, cIndex) => (
                                            <div className={`day_time_box ${this.props.selectedTime * 1000 === Date.parse(cItem.time) ? 'selected' : ''}`}
                                                 key={Date.parse(cItem.time)}
                                                 onClick={(e) => {
                                                     this.clickHandler(e, index, cIndex);
                                                 }}
                                                style={{
                                                    cursor: cItem.status === 2 ? 'not-allowed' : 'pointer'
                                                }}>
                                                <div className="day_time">
                                                    {
                                                        switchDayHandler(cItem.time.getHours())
                                                    }
                                                </div>
                                                <div className="day_status">
                                                    {
                                                        statusHandler(cItem.status, cItem.number ? cItem.number : '')
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                            </div>
                        ))
                    }
                </div>
                <div className="submit_box">
                    <Button clickHandler={this.submitHandler}>
                        {
                            '下一步'
                        }
                    </Button>
                </div>
            </div>
        )
    }
}

export default connect(map)(TimeSelect);