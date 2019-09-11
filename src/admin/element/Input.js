import React from 'react';
import './Input.scss';

function Input(props) {
    function focusHandler(e) {
        let target = e.target;
        if(target) {
            target.style.borderColor = '#189F92';
        }
    }
    function blurHandler(e) {
        let target = e.target;
        if(target) {
            target.style.borderColor = '#DCDEE0';
        }
    }
    return (
        <input type={props.type ? props.type : 'text'}
               placeholder={props.placeholder ? props.placeholder : ''}
               style={props.style ? props.style : {}}
               onChange={props.onChangeHandler ? props.onChangeHandler : () => {}}
               onFocus={focusHandler}
               onBlur={blurHandler}
        />
    )
}

export default Input;