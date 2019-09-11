import React from "react";
import './StatusPanel.scss';

export function Activated(props) {
    return (
        <div className="status_panel activated" onClick={props.clickHandler}>
            <span>
                {
                    props.children
                }
            </span>
        </div>
    )
}

export function Activating(props) {
    return (
        <div className="status_panel activating" onClick={props.clickHandler}>
            <span>
                {
                    props.children
                }
            </span>
        </div>
    )
}

export function Forbidden(props) {
    return (
        <div className="status_panel forbidden" onClick={props.clickHandler}>
            <span>
                {
                    props.children
                }
            </span>
        </div>
    )
}

export function ModuleButton(props) {
    return (
        <div className="status_panel module" onClick={props.clickHandler}>
            <span>
                {
                    props.children
                }
            </span>
        </div>
    )
}