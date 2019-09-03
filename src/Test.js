import React, { PureComponent } from 'react';
import AddButton from './element/AddButton';
import './Test.scss'
class Test extends PureComponent {
    render() {
        return(
            <div id={'test'}>
                <AddButton/>
            </div>
        )
    }
}

export default Test;