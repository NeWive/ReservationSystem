import React from 'react';
import Button from '../Button';
import { setPropsHandler } from "../../functions/propsHandler";
import { connect } from 'react-redux';
import './PlaceSelected.scss';

function map(state) {
    return {

    }
}

class PlaceSelected extends React.PureComponent {
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
            </div>
        )
    }
}

export default connect(map)(PlaceSelected);