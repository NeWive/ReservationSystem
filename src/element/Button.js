import React from 'react';
import './Button.scss';

class Button extends React.PureComponent{
    render() {
        return (
            <div className="button_blue"
                onClick={this.props.clickHandler || (() => {console.log('empty')})}
                style={this.props.style ? this.props.style : {}}
                key={this.props.name || ''}>
                <span>
                    {
                        this.props.children ? this.props.children : ''
                    }
                </span>
            </div>
        )
    }
}

export default Button;