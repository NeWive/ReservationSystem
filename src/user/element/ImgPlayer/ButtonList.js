import React from 'react';
import { connect } from 'react-redux';
import './ButtonList.scss';
const buttonList = [1, 2, 3];

function map(state) {
    return {
        index: state.displayedImgIndex,
    }
}

class ButtonList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(e) {
        let target = e.target;
        if(e.target.className === 'button_sel') {
            let domArr = document.getElementsByClassName('button_sel');
            let arr = [];
            for(let i of domArr) {
                arr.push(i);
            }
            let index = arr.indexOf(target);
            if(index !== this.props.index) {
                this.props.clearTimer();
                this.props.setTimer();
                this.props.dispatch({
                    type: 'SET_DISPLAYED_IMG_INDEX',
                    value: index,
                });
            }
        }
    }
    render() {
        return (
            <div className="button_box" onClick={(e) => { this.clickHandler(e) }}>
                {
                    buttonList.map((item, index) => (
                        <div className="button_sel"
                             key={index}
                            style={{
                                cursor: this.props.index === index ? 'default' : 'pointer'
                            }}/>
                    ))
                }
                <div className="button_move" style={{
                    left: this.props.left
                }}/>
            </div>
        )
    }
}

export default connect(map)(ButtonList);