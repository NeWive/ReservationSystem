import React from 'react';
import PersonalInfo from './PersonalInfo';
import Password from './Password';
import { setStateHandler } from "../../functions/stateHandler";
import { changeInfoSels } from '../../config/list.config';
import './EditInfo.scss';

class ChangeInfo extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.switchForms = this.switchForms.bind(this);
    }
    switchForms() {
        switch (this.state.index) {
            case 0:
                return <PersonalInfo/>;
            case 1:
                return <Password/>;
            default:
                return '';
        }
    }
    clickHandler(index) {
        setStateHandler(this,'index', index);
    }
    render() {
        return (
            <div id="ChangeInfo">
                <div className="edit_button_box">
                    {
                        changeInfoSels.map((item, index) => (
                            <div className="select_edit_button" key={item.key} onClick={() => {this.clickHandler(index)}}>
                                {
                                    item.name
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="edit_form_box">
                    {
                        this.switchForms()
                    }
                </div>
            </div>
        )
    }
}

export default ChangeInfo;