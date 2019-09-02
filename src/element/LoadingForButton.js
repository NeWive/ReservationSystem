import React, { PureComponent } from 'react';
import './LoadingForButton.scss';

class LoadingForButton extends PureComponent {
    render() {
        return (
            <div className="loaderForButton">
                <div className="loading"/>
            </div>
        )
    }
}

export default LoadingForButton;