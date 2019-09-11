import React from 'react';
import './StatusPanel.scss';

class StatusPanel extends React.PureComponent {
    render() {
        return (
            <span className={`status ${this.props.status}`}>
                {
                    this.props.children
                }
            </span>
        )
    }
}

export default StatusPanel;