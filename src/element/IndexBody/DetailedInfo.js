import React from 'react';
import demo from '../../static/deom.jpg';
import { connect } from 'react-redux';
import { detailedInfoForm } from "../../config/list.config";
import './DetailedInfo.scss';
import StatusPanel from "../StatusPanel";
import {setPropsHandler} from "../../functions/propsHandler";

const testData = {
    holder: '尼古拉斯·赵四',
    title: '乡村爱情',
    place: '办公室',
    time: '2018年9月2号 下午',
    ps: '东北F4重新聚会',
    content: '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤' +
        '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤' +
        '嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤',
    img: [demo, demo, demo, demo, demo,],
    status: '通过',
};

function map() {
    return {

    }
}

class DetailedInfo extends React.PureComponent {
    render() {
        return (
            <div id="DetailedInfo">
                <div className="left_box">
                    {
                        detailedInfoForm.map((item, index) => (
                            <div className="info_sel" key={item.key}>
                                <div className={'sel name'}>
                                    {
                                        `${item.name}：`
                                    }
                                </div>
                                <div className="sel info">
                                    {
                                        item.key === 'status' ? (
                                            <StatusPanel status={'pass'}>
                                                { testData[item.key] }
                                            </StatusPanel>
                                        ) : testData[item.key]
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="left_box">
                    <div className="info_sel content_box">
                        <div className={'sel name special'}>
                            {
                                `申请内容：`
                            }
                        </div>
                        <div className="sel info">
                            {
                                testData['content']
                            }
                        </div>
                    </div>
                    <div className="info_sel">
                        <div className={'sel name special'}>
                            {
                                `上传的图片：`
                            }
                        </div>
                        <div className="img_container">
                            <div className="sel info img_box">
                                {
                                    testData['img'].map((item, index) => (
                                        <div className="img" key={index}>
                                            <img src={item} alt=""/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="back" onClick={() => {
                    setPropsHandler(this, 'SET_INDEX_PANEL_INDEX', 2);
                }}>
                    <div className="back_arrow_box">
                        <div className="back_arrow"/>
                    </div>
                    <div className="words">
                        返回
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(map)(DetailedInfo);