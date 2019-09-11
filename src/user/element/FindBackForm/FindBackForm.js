import React from 'react';
import InputBlue from '../InputBlue';
import Button from '../Button';
import { connect } from 'react-redux';
import './FindBackForm.scss';

// SET_LOG_PANEL_INDEX
function map(state) {
    return {
        logPanelIndex: state.logPanelIndex,
    }
}

class FindBackForm extends React.PureComponent {
    render() {
        return (
            <div id="FindBackForm">
                <div className="find_back_container">
                    <div className="title">
                        <span>
                            忘记密码
                        </span>
                    </div>
                    <div className="input_box">
                        <div className="label">
                            <span>
                                请输入学号:
                            </span>
                        </div>
                        <InputBlue/>
                    </div>
                    <div className="submit_box">
                        <Button>
                            找回密码
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(map)(FindBackForm);