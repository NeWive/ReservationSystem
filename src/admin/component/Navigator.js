import React, { useState } from "react";
import menu from '../statics/icons8-menu-50.png';
import { Transition } from 'react-transition-group';
import './Navigator.scss';

function Navigator(props) {
    const widthList = [68, 96];
    const rightList = [95, 0];
    const linkList = ['注销', '前台首页'];
    const startWidth = 0;
    const [startRight, setStartRight] = useState(0);
    const [endRight, setEndRight] = useState(0);
    const [endWidth, setEndWidth] = useState(0);
    const [isStart, setIsStart] = useState(false);
    const defaultStyle = {
        transition: `width 300ms, right 300ms`,
        width: widthList[0],
        right: 0,
    };

    const transitionStyles = {
        entering: {
            width: startWidth,
            right: startRight,
        },
        entered: {
            width: startWidth,
            right: startRight,
        },
        exiting: {
            width: endWidth,
            right: endRight,
        },
        exited: {
            width: endWidth,
            right: endRight,
        },
    };
    return (
        <div id="AdminNavigator">
            <div className="navigator_container">
                <div className="left">
                    <span>
                        众创空间预约系统
                    </span>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <div className="menu_button_box">
                        <a href="" className={'menu_button'} onClick={(e) => {
                            e.preventDefault();
                            props.setIsMenuOpen(!props.isAdminMenuOpen)
                        }}>
                            <img src={menu} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="right" onMouseLeave={(e) => {
                    e.stopPropagation();
                    setStartRight(endRight);
                    setIsStart(true);
                }} >
                    {
                        linkList.map((item, index) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a href="#" onMouseEnter={(e) => {
                                e.stopPropagation();
                                setEndWidth(widthList[index]);
                                setEndRight(rightList[index]);
                                index === 1 ? setStartRight(rightList[0]) : setStartRight(rightList[1]);
                                setIsStart( false);
                            }} key={index}>
                                <span>
                                    {
                                        item
                                    }
                                </span>
                            </a>
                        ))
                    }
                    <Transition timeout={300}
                                in={isStart}
                                appear={true}>
                        {
                            state => (
                                <div className="under_line"
                                     style={{
                                         ...defaultStyle,
                                         ...transitionStyles[state],
                                     }}/>
                            )
                        }
                    </Transition>
                </div>
            </div>
        </div>
    )
}

export default Navigator;