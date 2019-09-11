import React from 'react';
import ImgPlayer from '../../element/ImgPlayer/ImgPlayerBox';
import LogInForm from '../../element/LogInForm/LogInForm';
import FindBackForm from '../../element/FindBackForm/FindBackForm';
import RegisterForm from '../../element/Register/RegisterForm';
import Description from '../../element/Register/Description';
import { connect } from 'react-redux';
import './LogPanel.scss';
// SET_LOG_PANEL_INDEX
function map(state) {
    return {
        logPanelIndex: state.logPanelIndex,
    }
}

class LogPanel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.switchLeftPanel = this.switchLeftPanel.bind(this);
        this.switchRightPanel = this.switchRightPanel.bind(this);
    }
    switchLeftPanel() {
        return this.props.logPanelIndex === 2 ? <RegisterForm/> : <ImgPlayer/>
    }
    switchRightPanel() {
        switch (this.props.logPanelIndex) {
            case 0:
                return <LogInForm/>;
            case 1:
                return <FindBackForm/>;//找回密码
            case 2:
                return <Description/>;//注册的右半块
        }
    }
    render() {
        return (
            <div id="LogPanel">
                <div className="container">
                    <div className="container_title">
                        <span>
                            众创空间自主预约系统
                        </span>
                    </div>
                    <div className="form_box">
                        <div className="left">
                            {
                                this.switchLeftPanel()
                            }
                        </div>
                        <div className="right">
                            {
                                this.switchRightPanel()
                            }
                        </div>
                    </div>
                    <div className="footer">
                        <span>
                            Copyright @2018 爱特工作室
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(map)(LogPanel);