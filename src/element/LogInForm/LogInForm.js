import React from 'react';
import Input from '../Input';
import Button from '../Button';
import { connect } from 'react-redux';
import { logInList } from "../../config/list.config";
import './LogInForm.scss';

// SET_LOG_PANEL_INDEX
function map(state) {
    return {
        logPanelIndex: state.logPanelIndex,
    }
}

class LogInForm extends React.PureComponent {
    render() {
        return (
            <div id="LogInForm">
                <div className="title">
                    <span>
                        欢迎预约
                    </span>
                </div>
                <div className="log_in_form_box">
                    <div className="box_container">
                        <div className="input_box">
                            {
                                logInList.map((item) => (
                                    <div className="input_sel">
                                        <Input type={item.type}
                                                placeholder={item.name}
                                                key={item.key}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="submit_box">
                            <div className="selections">
                                <div className="left_link">
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        this.props.dispatch({
                                            type: 'SET_LOG_PANEL_INDEX',
                                            value: 2,
                                        })
                                    }}>
                                        还没注册?
                                    </a>
                                </div>
                                <div className="right_link">
                                    <a href="" onClick={(e) => {
                                        e.preventDefault();
                                        this.props.dispatch({
                                            type: 'SET_LOG_PANEL_INDEX',
                                            value: 1,
                                        });
                                    }}>
                                        忘记密码
                                    </a>
                                </div>
                            </div>
                            <Button>
                                登陆
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(map)(LogInForm);