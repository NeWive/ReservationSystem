import React from 'react';
import './AddButton.scss';

class AddButton extends React.PureComponent {
    render() {
        return (
            <div id="AddButton" onClick={ (e) => {
                    e.stopPropagation();
                    this.props.clickHandler ? this.props.clickHandler() : (() => {})();
                }}>
                <div className="edge"/>
            </div>
        )
    }
}

export default AddButton;