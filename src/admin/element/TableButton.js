import React from "react";
import './TableButton.scss';

function TableButton(props) {
    return (
        <div className="table_button"
    onClick={props.clickHandler}
    style={props.style ? props.style : {}}
    key={props.key || ''}>
        {
            props.children ? props.children : ''
        }
        </div>
)
}

export default TableButton;