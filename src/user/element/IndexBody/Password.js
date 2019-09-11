import React from 'react';
import InputBlue from '../InputBlue';
import Button from '../Button';
import { changePasswordList } from "../../config/list.config";
import './Password.scss';

class Password extends React.PureComponent {
    render() {
        return (
            <div id="Password">
                <div className="info_input_box">
                    {
                        changePasswordList.map((item) => (
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

export default Password;