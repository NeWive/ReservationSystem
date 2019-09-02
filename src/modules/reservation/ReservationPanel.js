import React from 'react';
import ReservationHead from './ReservationHead';
import ReservationBody from './ReservationBody';
import './ReservationPanel.scss';

class ReservationPanel extends React.PureComponent {
    render() {
        return (
            <div id="ReservationPanel">
                <div className="reservation_head_box">
                    <ReservationHead/>
                </div>
                <div className="reservation_body_box">
                    <ReservationBody/>
                </div>
            </div>
        )
    }
}

export default ReservationPanel;