import React from 'react';
import './Input.scss';

class Input extends React.PureComponent {
    render() {
        return (
            <div className="input" key={this.props.key || ''}>
                <input type={this.props.type ? this.props.type : 'text'}
                       placeholder={this.props.placeholder ? this.props.placeholder : ''}
                       style={this.props.style ? this.props.style : {}}
                       onChange={this.props.onchangeHandler ? this.props.onchangeHandler : () => {}}
                />
            </div>
        )
    }
}

export default Input;