import React from 'react';
import './Status.scss';

class Status extends React.PureComponent {
    render() {
        return (
            <div id="Status">
                经检测，你的账号状态为 <span className={'normal'}>正常</span> 状态。
            </div>
        )
    }
}

export default Status;