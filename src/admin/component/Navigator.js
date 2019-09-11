import React, { useState } from "react";
import { Transition } from 'react-transition-group';
import './Navigator.scss';

function Navigator() {
    const widthList = [68, 96];
    const linkList = ['注销', '前台首页'];
    const [transX, setTransX] = useState(15);
    const [width, setWidth] = useState(0);
    const [underLineOn, setUnderLineOn] = useState(false);
    const defaultStyle = {
        transform: `translate(0px, ${transX})`,
        transition: `transform 300ms`,
        width,
    };

    const transitionStyles = {
        entering: {
            transform: `translate(0px, ${transX})`,
            width,
        },
        entered: {
            transform: `translate(0px, ${transX})`,
            width,
        },
        exiting: {
            transform: `translate(0px, ${transX})`,
            width,
        },
        exited: {
            transform: `translate(0px, ${transX})`,
            width,
        },
    };
    return (
        <div id="Navigator">
            <div className="navigator_container">
                <div className="left">
                    <span>
                        众创空间预约系统
                    </span>
                </div>
                <div className="right">
                    {
                        linkList.map((item, index) => (
                            <a href="#" onMouseOver={() => {
                                setUnderLineOn(true);
                                console.log(widthList[index]);
                                setWidth(widthList[index])
                            }} onMouseOut={() => {
                                setUnderLineOn(false);
                            }} key={index}>
                                <span>
                                    {
                                        item
                                    }
                                </span>
                            </a>
                        ))
                    }
                    {
                        underLineOn ? (
                            <Transition timeout={300} in={true}>
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
                        ) : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default Navigator;