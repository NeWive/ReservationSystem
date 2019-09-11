import React from 'react';
import Button from '../Button';
import InputBlue from '../InputBlue';
import Textarea from '../Textarea';
import LoadingForButton from '../LoadingForButton';
import { setStateHandler } from "../../functions/stateHandler";
import { applyFormList } from '../../config/list.config';
import { switchDayHandler } from '../../functions/dateHandler';
import { connect } from 'react-redux';
import { setPropsHandler } from "../../functions/propsHandler";
import './ReservationForm.scss';

function switchHandler(type, placeHolder) {
    switch (type) {
        case 'text':
            return <InputBlue placeholder={placeHolder}/>;
        case 'textarea':
            return <Textarea placeholder={placeHolder}/>;
        default:
            return '';
    }
}

function map(state) {
    return {
        selectedTime: state.selectedTime,//需乘1000,
        selectedPlace: state.selectedPlace,
        reservationIndex: state.reservationIndex,
    }
}

class ReservationForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isRequesting: false,
        };
        this.time = new Date(this.props.selectedTime * 1000);
    }
    render() {
        return (
            <div id="ReservationForm">
                <div className="title">
                    <div className="title_left">
                        现选择的时间：
                    </div>
                    <div className="time_range">
                        {
                            `${this.time.getFullYear()}年${this.time.getMonth() + 1}月${this.time.getDate()}日${switchDayHandler(this.time.getHours())}`
                        }
                    </div>
                    <div className="title_right">
                        <a href="" onClick={(e) => {
                            e.preventDefault();
                            setPropsHandler(this, 'SET_RESERVATION_INDEX', 1);
                        }}>
                            返回
                        </a>
                    </div>
                </div>
                <div className="body">
                    <div className="input_box">
                        {
                            applyFormList.map((item, index) => (
                                <div className="input_sel" key={item.key}>
                                    <div className={`label_box  ${index === 0 ? 'special' : ''}`}>
                                        <span>
                                            {
                                                item.name
                                            }
                                        </span>
                                    </div>
                                    <div className="input_part">
                                        {
                                            switchHandler(item.type, item.placeHolder)
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="submit_box">
                    <Button clickHandler={() => {
                        setStateHandler(this, 'isRequesting', true)
                    }}>
                        {
                            this.state.isRequesting ? <LoadingForButton/> : '立即预约'
                        }
                    </Button>
                </div>
            </div>
        )
    }
}

export default connect(map)(ReservationForm);