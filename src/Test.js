import React, { PureComponent } from 'react';
import Input from "./element/Input";
import './Test.scss'
class Test extends PureComponent {
    render() {
        return(
            <div id={'test'}>
                <Input/>
            </div>
        )
    }
}

export default Test;