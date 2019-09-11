import React from 'react';
import './CloseButtonBlack.scss';

class CloseButtonBlack extends React.PureComponent {
    render() {
        return (
            <div id="CloseButtonBlack" onClick={(e) => {
                e.stopPropagation();
                if(this.props.clickHandler) {
                    this.props.clickHandler();
                }
            }}>
                <div className="edge"/>
            </div>
        )
    }
}

export default CloseButtonBlack;