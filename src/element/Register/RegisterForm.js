import React from 'react';
import Input from '../Input';
import Button from '../Button';
import { registerList } from "../../config/list.config";
import { connect } from 'react-redux';
import './RegisterForm.scss';
// SET_LOG_PANEL_INDEX
function map(state) {
    return {
        logPanelIndex: state.logPanelIndex,
    }
}

class RegisterForm extends React.PureComponent {
    render() {
        return (
            <div id="RegisterForm">
                <div className="register_form_container">
                    <div className="title">
                        <span>
                            注册
                        </span>
                    </div>
                    <div className="input_list">
                        {
                            registerList.map((item) => (
                                <div className="input_sel" key={item.key}>
                                    <Input placeholder={item.name}
                                            type={item.type}/>
                                </div>
                            ))
                        }
                    </div>
                    <div className="submit_box">
                        <div className="selection">
                            <a href="#" onClick={
                                (e) => {
                                    e.preventDefault();
                                    this.props.dispatch({
                                        type: 'SET_LOG_PANEL_INDEX',
                                        value: 0,
                                    })
                                }
                            }>
                                已有账号？
                            </a>
                        </div>
                        <Button>
                            立即注册
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(map)(RegisterForm);

