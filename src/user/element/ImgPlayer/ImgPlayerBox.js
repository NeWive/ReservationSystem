import React from 'react';
import ImgPlayer from './Main';
import './ImgPlayerBox.scss';

class ImgPlayerBox extends React.PureComponent {
    render() {
        return (
            <div id="ImgPlayer">
                <div className="title">
                    <span>
                        奇思妙想在这里萌芽
                    </span>
                </div>
                <div className="content_box">
                    <ImgPlayer/>
                </div>
            </div>
        )
    }
}

export default ImgPlayerBox;