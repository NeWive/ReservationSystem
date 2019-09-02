import React from 'react';
import TimeSelect from '../../element/ReservationBody/TimeSelect';
import PlaceSelected from '../../element/ReservationBody/PlaceSelected';
import ReservationForm from '../../element/ReservationBody/ReservationForm';
import { connect } from 'react-redux';
import './ReservationBody.scss';

function map(state) {
    return {
        reservationIndex: state.reservationIndex,
    }
}

class ReservationBody extends React.PureComponent {
    constructor(props) {
        super(props);
        this.switchHandler = this.switchHandler.bind(this);
    }
    switchHandler() {
        switch (this.props.reservationIndex) {
            case 0:
                return <TimeSelect/>;
            case 1:
                return <PlaceSelected/>;
            case 2:
                return <ReservationForm/>;
            default:
                return '';
        }
    }
    render() {
        return (
            <div id="ReservationBody">
                {
                    this.switchHandler()
                }
            </div>
        )
    }
}

export default connect(map)(ReservationBody);