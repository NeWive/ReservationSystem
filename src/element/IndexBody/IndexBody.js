import React from 'react';
import Navigator from './Navigator';
import ModuleBody from './ModuleBody';
import './IndexBody.scss';

class IndexBody extends React.PureComponent {
    render() {
        return (
            <div id="IndexBody">
                <div className="navigator_box">
                    <Navigator/>
                </div>
                <div className="module_box">
                    <ModuleBody/>
                </div>
            </div>
        )
    }
}

export default IndexBody;