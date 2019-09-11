import React, { useState } from 'react';
import { Transition } from "react-transition-group";
// import './Test.scss';

function Test() {
    const duration = 2000;
    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out, width ${duration}ms`,
        opacity: 1,
        width: 200,
        background: '#000000',
    };
    const [inProps, setInProp] = useState(true);
    const transitionStyles = {
        entering: { opacity: 1, width: 300 },
        entered:  { opacity: 1, width: 300 },
        exiting:  { opacity: 1, width: 500 },
        exited:  { opacity: 1, width: 500 },
    };
    return (
        <>
            <Transition timeout={duration} in={inProps}>
                {
                    state => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                        }}>
                            I'm your father!
                        </div>
                    )
                }
            </Transition>
            <button onClick={() => setInProp(!inProps)}>
                click
            </button>
        </>
    )
}

export default Test;