import React from 'react';
import Button from '../Button';
import demo from '../../static/deom.jpg';
import { setPropsHandler } from "../../functions/propsHandler";
import { connect } from 'react-redux';
import './PlaceSelected.scss';

function map(state) {
    return {
        selectedPlace: state.selectedPlace,
    }
}

const testData = [
    {
        name: 'Mblock创客套件',
        img: demo,
    },
    {
        name: 'Mblock创客套件',
        img: demo,
        number: 10,
    }
];

class PlaceSelected extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="PlaceSelected">
                <div className="title">
                    <div className="title_left">
                        现可预约的区域：
                    </div>
                    <div className="title_right">
                        <a href="" onClick={(e) => {
                            e.preventDefault();
                            setPropsHandler(this, 'SET_RESERVATION_INDEX', 0);
                        }}>
                            返回
                        </a>
                    </div>
                </div>
                <div className="body">
                    {
                        testData.map((item, index) => (
                            <div className={`place_box ${index === this.props.selectedPlace ? 'selected' : ''}`}
                                 key={index}
                                onClick={() => {
                                    setPropsHandler(this, 'SET_SELECTED_PLACE', index);
                                }}>
                                <div className="body_title">
                                    {
                                        item.name
                                    }
                                </div>
                                <div className="img_box">
                                    <img src={item.img} alt=""/>
                                </div>
                                {
                                    item.number && item.number > 0 ? (
                                        <div className="message">
                                            <div className={'special'}>

                                            </div>
                                            {
                                                `有${item.number}人正在预约这个区域`
                                            }
                                        </div>
                                    ) : ''
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="submit_box">
                    <Button clickHandler={() => {
                        setPropsHandler(this, 'SET_RESERVATION_INDEX', 2);
                    }}>
                        下一步
                    </Button>
                </div>
            </div>
        )
    }
}

export default connect(map)(PlaceSelected);