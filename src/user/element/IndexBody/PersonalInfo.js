import React from 'react';
import InputBlue from '../InputBlue';
import Button from '../Button';
import { editInfoList } from "../../config/list.config";
import './PersonalInfo.scss';

class PersonalInfo extends React.PureComponent {
    render() {
        return (
            <div id="PersonalInfo">
                <div className="info_input_box">
                    {
                        editInfoList.map((item) => (
                            <div className="info_input" key={item.key}>
                                <div className="info_input_label">
                                    {
                                        `${item.name}：`
                                    }
                                </div>
                                <InputBlue/>
                            </div>
                        ))
                    }
                </div>
                <div className="submit_box">
                    <Button style={{
                        width: 360,
                        height: 70,
                    }}>
                        完成
                    </Button>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;