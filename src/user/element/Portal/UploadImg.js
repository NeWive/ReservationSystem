import React from 'react';
import CloseButtonBlack from '../CloseButtonBlack';
import demo from '../../static/deom.jpg';
import AddButton from '../AddButton';
import Button from '../Button';
import { connect } from 'react-redux';
import { setPropsHandler } from "../../functions/propsHandler";
import './UploadImg.scss';

function map() {
    return {

    }
}

class UploadImg extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            imgArr: [demo, demo, demo, demo],
        }
    }
    render() {
        return (
            <div id="UploadImg">
                <div className="upload_container">
                    <div className="upload_img_head">
                        <div className="upload_left">
                            请选择上传的图片
                        </div>
                        <div className="upload_right">
                            <CloseButtonBlack clickHandler={this.props.clickHandler}/>
                        </div>
                    </div>
                    <div className="upload_body">
                        {
                            this.state.imgArr.map((item, index) => (
                                <div className="img_box" key={index}>
                                    <img src={item} alt=""/>
                                </div>
                            ))
                        }
                        {
                            this.state.imgArr.length < 5 ? <AddButton/> : ''
                        }
                    </div>
                    <div className="submit_box">
                        <Button>
                            {
                                '上传'
                            }
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(map)(UploadImg);