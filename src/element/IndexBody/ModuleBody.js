import React from 'react';
import Status from './Status';
import ChangeInfo from './EditInfo';
import ReservationLog from './ReservationLog';
import RulesLog from './RulesLog';
import DetailedInfo from './DetailedInfo';
import { connect } from 'react-redux';
import './ModuleBody.scss';

function map(state) {
    return {
        indexPanelIndex: state.indexPanelIndex,
    }
}

class ModuleBody extends React.PureComponent {
    constructor(props){
        super(props);
        this.switchModule = this.switchModule.bind(this);
    }
    switchModule() {
        switch (this.props.indexPanelIndex) {
            case 0:
                return <Status/>;
            case 1:
                return <ChangeInfo/>;
            case 2:
                return <ReservationLog/>;
            case 3:
                return <RulesLog/>;
            case 4:
                return <DetailedInfo/>
            default:
                return '';
        }
    }
    render() {
        return (
            <div id="ModuleBody">
                {
                    this.switchModule()
                }
            </div>
        )
    }
}

export default connect(map)(ModuleBody);