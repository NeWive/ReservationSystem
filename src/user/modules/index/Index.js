import React from 'react';
import LogPanel from './LogPanel';
import IndexPanel from './IndexPanel';
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
                    !this.props.isLogin ? <LogPanel/> : <IndexPanel/>
                }
            </div>
        );
    }
}

export default connect(map)(Index);