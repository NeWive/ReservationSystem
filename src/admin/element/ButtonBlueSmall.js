import React from "react";
import './ButtonBlueSmall.scss';

function ButtonBlue(props) {
    return (
        <div className="button_green_small"
             onClick={props.clickHandler}
             style={props.style ? props.style : {}}
             key={props.key || ''}>
            {
                props.children ? props.children : ''
            }
        </div>
    )
}

export default ButtonBlue;