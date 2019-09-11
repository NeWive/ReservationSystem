import React from 'react';
import { setStateHandler } from "../../functions/stateHandler";
import { Link } from "react-router-dom";
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import './ReservationHead.scss';

function map(state) {
    return {
        isLogin: state.isLogin,
    }
}

class ReservationHead extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0,
        }
    }
    render() {
        return (
            <div id="ReservationHead">
                <div className="reservation_head_container">
                    <div className="title">
                        众创空间自主预约系统
                        <Link to={'/'} >
                            <div className="head_portrait" onMouseOver={(e) => {
                                e.preventDefault();
                                setStateHandler(this, 'opacity', 1)
                            }} onMouseOut={(e) => {
                                e.preventDefault();
                                setStateHandler(this, 'opacity', 0)
                            }}>

                            </div>
                        </Link>
                    </div>
                </div>
                <Motion defaultStyle={{
                    opacity: 0,
                }} style={{
                    opacity: spring(this.state.opacity),
                }}>
                    {
                        ({ opacity }) => (
                           <div id={'head_tips'} style={{
                               opacity: opacity,
                           }}>
                               {
                                   this.props.isLogin ? '个人中心' : '登陆'
                               }
                           </div>
                        )
                    }
                </Motion>
            </div>
        )
    }
}

export default connect(map)(ReservationHead);