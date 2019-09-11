import React from 'react';
import './InputBlue.scss';

class InputBlue extends React.PureComponent {
    render() {
        return (
            <div className="input_blue" key={this.props.key || ''}>
                <input type={this.props.type ? this.props.type : 'text'}
                        placeholder={this.props.placeholder ? this.props.placeholder : ''}
                        style={this.props.style ? this.props.style : {}}
                        onChange={this.props.onchangeHandler ? this.props.onchangeHandler : () => {}}
                        />
            </div>
        )
    }
}

export default InputBlue;