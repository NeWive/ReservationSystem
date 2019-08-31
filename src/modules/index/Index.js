import React from 'react';
import LogPanel from './LogPanel';
import { connect } from 'react-redux';
import './Index.scss';

function map(state) {
    return {
        isLogin: state.isLogin,
    }
}

class Index extends React.PureComponent {
    render() {
        return (
            <div id="Index">
                {
                    !this.props.isLogin ? <LogPanel/> : ''
                }
            </div>
        );
    }
}

export default connect(map)(Index);