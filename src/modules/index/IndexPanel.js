import React from 'react';
import Header from '../../element/IndexHeader/Header';
import IndexBody from '../../element/IndexBody/IndexBody';
import ReservationFooter from '../reservation/ReservationFooter';
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
                <div className="footer_box">
                    <ReservationFooter/>
                </div>
            </div>
        )
    }
}

export default IndexPanel;