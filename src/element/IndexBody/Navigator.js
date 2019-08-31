import React from 'react';
import { Link } from "react-router-dom";
import { naviList } from '../../config/list.config';
import { connect } from 'react-redux';
import './Navigator.scss';

function map(state) {
    return {
        indexPanelIndex: state.indexPanelIndex,
    }
}

class Navigator extends React.PureComponent {
    render() {
        return (
            <div id="Navigator">
                <div className="navigator_container">
                    <ul>
                        {
                            naviList.map((item, index) => (
                                <li key={item.key}>
                                    <a href="" onClick={(e) => {
                                        e.preventDefault();
                                        if(index >=0 && index <= 3) {
                                            this.props.dispatch({
                                                type: 'SET_INDEX_PANEL_INDEX',
                                                value: index,
                                            })
                                        }else if(index === 4) {
                                            alert('注销成功');
                                        }
                                    }}>
                                        <span>
                                            {
                                                item.name
                                            }
                                        </span>
                                    </a>
                                </li>
                            ))
                        }
                        <li>
                            <Link to={'/index'}>
                                返回首页
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(map)(Navigator);