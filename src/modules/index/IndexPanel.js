import React from 'react';
import Header from '../../element/IndexHeader/Header';
import IndexBody from '../../element/IndexBody/IndexBody';
import './IndexPanel.scss';

class IndexPanel extends React.PureComponent {
    render() {
        return (
            <div id="IndexPanel">
                <div className="header_box">
                    <Header/>
                </div>
                <div className="body_box">
                    <IndexBody/>
                </div>
            </div>
        )
    }
}

export default IndexPanel;