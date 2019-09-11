import React from 'react';
import img from '../../static/deom.jpg';
import ButtonList from "./ButtonList";
import { setPropsHandler } from "../../functions/propsHandler";
import { connect } from 'react-redux';
import { leftList } from "../../config/style.config";
import { Motion, spring } from 'react-motion';
import './Main.scss';

const playList = [img, img, img];
function map(state) {
    return {
        index: state.displayedImgIndex,
    }
}

class ImgPlayer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.timer = null;
        this.delta = 1;
        this.clearTimer = this.clearTimer.bind(this);
        this.setTimer = this.setTimer.bind(this);
    }
    setTimer() {
        this.timer = setInterval(() => {
            if(this.props.index === 2) {
                this.delta = -1;
            }else if(this.props.index === 0) {
                this.delta = 1;
            }
            setPropsHandler(this, 'SET_DISPLAYED_IMG_INDEX', this.props.index + this.delta);
        }, 2000);
    }
    clearTimer() {
        clearInterval(this.timer);
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            if(this.props.index === 2) {
                this.delta = -1;
            }else if(this.props.index === 0) {
                this.delta = 1;
            }
            setPropsHandler(this, 'SET_DISPLAYED_IMG_INDEX', this.props.index + this.delta);
        }, 2000);
    }
    componentWillMount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <Motion style={{
                buttonLeft: spring(leftList[this.props.index]),
                imgLeft: spring(-391 * this.props.index),
            }}>
                {
                    ({
                        buttonLeft, imgLeft,
                     }) => (
                        <div id="ImgPlayer">
                            <div className="window">
                                <div className="ImgPlayerContainer" style={{
                                    left: imgLeft,
                                }}>
                                    {
                                        playList.map((item, index) => (
                                            <div className="play_sel" key={index}>
                                                <img src={ item } alt=""/>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="buttons_box">
                                <ButtonList left={ buttonLeft } clearTimer={this.clearTimer} setTimer={this.setTimer}/>
                            </div>
                        </div>
                    )
                }
            </Motion>
        )
    }
}

export default connect(map)(ImgPlayer);