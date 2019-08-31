import React from 'react';
import { connect } from 'react-redux';
import './Header.scss';

function map(state){
    return {
        stuInfo: state.stuInfo
    }
}

class Header extends React.PureComponent {
    render() {
        return (
            <div id={'Header'}>
                <div className="header_container">
                    <div className="header_left">
                            <span>
                                众创空间自主预约系统
                            </span>
                    </div>
                    <div className="header_right">
                        <span>
                            {
                                `你好，${this.props.stuInfo.name}`
                            }
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(map)(Header);