import React from "react";
import './ButtonBlue.scss';

function ButtonBlue(props) {
    return (
        <div className="button_green"
             onClick={props.clickHandler}
             style={props.style ? props.style : {}}
             key={props.key || ''}>
                <span>
                    {
                        props.children ? props.children : ''
                    }
                </span>
        </div>
    )
}

export default ButtonBlue;