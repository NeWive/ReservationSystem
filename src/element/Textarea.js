import React from 'react';
import './Textarea.scss';

class Textarea extends React.PureComponent {
    render() {
        return (
            <div className="textarea" key={this.props.key || ''}>
                <textarea placeholder={this.props.placeholder ? this.props.placeholder : ''}
                       style={this.props.style ? this.props.style : {}}
                       onChange={this.props.onchangeHandler ? this.props.onchangeHandler : () => {}}
                />
            </div>
        )
    }
}

export default Textarea;